var mongoose = require('mongoose'),
    passport = require('passport');
const User = mongoose.model('User');
const Message = mongoose.model('Message');
const CustomRates = mongoose.model('CustomRates');
const WorkerRates = mongoose.model('WorkerRates');
var jwt = require('jsonwebtoken');
var randtoken = require('rand-token')
// const Bank = mongoose.model('Bank');
// const Requests = mongoose.model('Requests');
// const Addfiles = mongoose.model('Addfiles');
var nodemailer = require('nodemailer');
const { mongo } = require('mongoose');
var fs = require('fs');
var handlebars = require('handlebars');
// const Nexmo = require('nexmo');
const refreshTokens = {};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'xxxxxxxx@gmail.com',
        pass: 'xxxxxxx'
    },
    tls: {
        rejectUnauthorized: false
    }
});

var readHTMLFile = function(path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
      if (err) {
          throw err;
          callback(err);
      }
      else {
          callback(null, html);
      }
  });
};

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1e2f9060589485",
    pass: "d3a29e8e580090"
  }
});
exports.register = (req, res) => {
    console.log('register user');
    console.log(req.body)
    if (!req.body.emailAddress) {
        return res.status(400).json({ message: "All fields required" });
    }

    User.findOne({ emailAddress: req.body.emailAddress }).then(client => {
        if (client) {
            return res.status(400).json({ fullname: "User already exists" });
        } else {
            const client = new User(req.body);
            client.roles = [2];
            client.accessToken = 'access-token-' + Math.random();
            client.refreshToken = 'access-token-' + Math.random();
            client.pic = './assets/media/users/default.jpg';
            tempPass = client.hash;
            // if (req.body.hash) {
            //     client.setPassword(req.body.hash);
            // } else {
            //     client.setPassword('123456');
            // }
            if(req.body.Password && req.body.Password != ''){
              console.log('assign new password');
              client.setPassword(req.body.Password);
            }
            else if (req.body.hash && req.body.hash != '')
              client.setPassword(req.body.hash);
            else {
              client.hash = tempPass;
            }
            User.countDocuments({}, function(err, c) {
                console.log('location count document')
                client.id = c + 1;
                client.createdDate = new Date();
                if(client.accountType == 'Worker'){
                  User.countDocuments({ "surename": { "$regex": "^"+ client.surename.charAt(0) , "$options": "i" }, 'accountType':'Worker' }, function(err, c1){
                    console.log('asdsda')
                    var temp = client.surename.charAt(0);
                    if(c1 < 10){
                        temp += '000' + c1;
                    }else if(c1 < 100){
                        temp += '0' + c1;
                    }else if(c1 < 1000){
                        temp += '0' + c1;
                    }else{
                        temp += c1;
                    }
                    client.workerId = temp;
                    client.save((err) => {
                        if (err) {
                          console.log(err);
                          res.status(500).json(err);
                        } else {
                          console.log(client);
                          User.findOne({id:client.id}).exec(function (err, client){
                            if (err) return res.json({error: err, status:400});
                            else {
                              const departments = ['Housekeeping', 'Back of House', 'Food and Beverage'];
                              const rolesHK = ['Linen Porter', 'Floor Porter', 'Floor Supervisor', 'Room Supervisor', 'Evening Room Attendant', 'Public Area Attendant', 'Spa Attendant', 'Valet', 'Housekeeper'];
                              const rolesBOH = ['Kitchen Porter', 'Night Kitchen Porter', 'Night Cleaners', 'Supervisor BOH (Back of House)', 'Food Runners', 'Breakfast Runners', 'Commis Chef', 'Breakfast Chef', 'Chef De Partie', 'Pastry Chef', 'Banqueting Porter'];
                              const rolesFAB = ['Waiters', 'Night Waiters', 'Night Room Service', 'Supervisor Banqueting', 'Team Leader', 'Silver Service Waiters', 'Bar Staff', 'Cloakroom', 'Concierge', 'Hostess'];
                              WorkerRates.findOne({}).then(obj => {
                                departments.forEach(element => {
                                  if(element === 'Housekeeping') {
                                    rolesHK.forEach(role => {
                                      const data = {
                                        department: 'Housekeeping',
                                        clientId:client._id,
                                        role: role,
                                        payrateU25: 0,
                                        payrateO25: 0,
                                      };
                                      const newObj = new WorkerRates(data);
                                      newObj.save((err) => {
                                        if (err) {
                                          console.log(err)
                                          res.status(500).json(err);
                                        } else {
                                          console.log('added')
                                        }
                                      });
                                    });
                                  }
                                  else if(element === 'Back of House') {
                                    rolesBOH.forEach(role => {
                                      const data = {
                                        department: 'Back of House',
                                        clientId:client._id,
                                        role: role,
                                        payrateU25: 0,
                                        payrateO25: 0,
                                      };
                                      const newObj = new WorkerRates(data);
                                      newObj.save((err) => {
                                        if (err) {
                                          console.log(err)
                                          res.status(500).json(err);
                                        } else {
                                          console.log('added')
                                        }
                                      });
                                    });
                                  }
                                  else {
                                    rolesFAB.forEach(role => {
                                      const data = {
                                        department: 'Food and Beverage',
                                        clientId:client._id,
                                        role: role,
                                        payrateU25: 0,
                                        payrateO25: 0,
                                      };
                                      const newObj = new WorkerRates(data);
                                      newObj.save((err) => {
                                        if (err) {
                                          console.log(err)
                                          res.status(500).json(err);
                                        } else {
                                          console.log('added')
                                        }
                                      });
                                    });
                                  }
                                });
                              });
                              res.status(200).json(client);
                            }
                          });
                        }
                    });
                  })
                }
                else if (client.accountType == 'Client') {
                  // add entries of custom rates for this client
                  client.save((err) => {
                    if (err) {
                      res.status(500).json(err);
                    } else {
                      console.log(client);
                      // const token = client.generateJwt();
                      User.findOne({id:client.id}).exec(function (err, client){
                        if (err) return res.json({error: err, status:400});
                        else {
                          const departments = ['Housekeeping', 'Back of House', 'Food and Beverage'];
                          const rolesHK = ['Linen Porter', 'Floor Porter', 'Floor Supervisor', 'Room Supervisor', 'Evening Room Attendant', 'Public Area Attendant', 'Spa Attendant', 'Valet', 'Housekeeper'];
                          const rolesBOH = ['Kitchen Porter', 'Night Kitchen Porter', 'Night Cleaners', 'Supervisor BOH (Back of House)', 'Food Runners', 'Breakfast Runners', 'Commis Chef', 'Breakfast Chef', 'Chef De Partie', 'Pastry Chef', 'Banqueting Porter'];
                          const rolesFAB = ['Waiters', 'Night Waiters', 'Night Room Service', 'Supervisor Banqueting', 'Team Leader', 'Silver Service Waiters', 'Bar Staff', 'Cloakroom', 'Concierge', 'Hostess'];
                          CustomRates.findOne({}).then(obj => {
                            departments.forEach(element => {
                              if(element === 'Housekeeping') {
                                rolesHK.forEach(role => {
                                  const data = {
                                    department: 'Housekeeping',
                                    clientId:client._id,
                                    role: role,
                                    payrateU25: 0,
                                    chargerateU25: 0,
                                    payrateO25: 0,
                                    chargerateO25: 0
                                  };
                                  const newObj = new CustomRates(data);
                                  newObj.save((err) => {
                                    if (err) {
                                      console.log(err)
                                      res.status(500).json(err);
                                    } else {
                                      console.log('added')
                                    }
                                  });
                                });
                              }
                              else if(element === 'Back of House') {
                                rolesBOH.forEach(role => {
                                  const data = {
                                    department: 'Back of House',
                                    clientId:client._id,
                                    role: role,
                                    payrateU25: 0,
                                    chargerateU25: 0,
                                    payrateO25: 0,
                                    chargerateO25: 0
                                  };
                                  const newObj = new CustomRates(data);
                                  newObj.save((err) => {
                                    if (err) {
                                      console.log(err)
                                      res.status(500).json(err);
                                    } else {
                                      console.log('added')
                                    }
                                  });
                                });
                              }
                              else {
                                rolesFAB.forEach(role => {
                                  const data = {
                                    department: 'Food and Beverage',
                                    clientId:client._id,
                                    role: role,
                                    payrateU25: 0,
                                    chargerateU25: 0,
                                    payrateO25: 0,
                                    chargerateO25: 0
                                  };
                                  const newObj = new CustomRates(data);
                                  newObj.save((err) => {
                                    if (err) {
                                      console.log(err)
                                      res.status(500).json(err);
                                    } else {
                                      console.log('added')
                                    }
                                  });
                                });
                              }
                            });
                          });
                          res.status(200).json(client);
                        }
                      });
                    }
                  });
                }
                else{
                    client.save((err) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        console.log(client);
                        // const token = client.generateJwt();
                        User.findOne({id:client.id}).exec(function (err, client){
                          if (err) return res.json({error: err, status:400});
                          res.status(200).json(client);
                        });
                        // res.status(200).json(client)
                            // res.status(200).json("Registered successfully");
                    }
                });
                }

            })

        }
    });
};
exports.sendmsg= (req, res) => {
    console.log('sendmsg');
    console.log(req.body)
    User.findOne({ emailAddress: '' }).then(client => {
        if (client) {
            return res.status(400).json({ fullname: "Message already exists" });
        } else {
            console.log('cccc');
            const client = new Message(req.body);
            Message.countDocuments({}, function(err, c) {
                console.log('location count document')
                client.id = c + 1;
                client.createdDate = new Date();
                client.save((err) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        console.log(client);
                        res.status(200).json(client)
                    }
                });
            })

        }
    });
};
// exports.google = (req,res) =>{
//     console.log('1');
//     passport.authenticate('google', { scope:
//         [ 'https://www.googleapis.com/auth/plus.login',
//         , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] })
// };
// exports.google_callback = (req, res)=>{
//     console.log('2');
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
//     // res.redirect('/account');
//     res.status(500).json('ssss');
//   };
// }
// exports.google_auth = (req, res) => {
//     console.log('save-0')
//     console.log(req.body.providerId);
//     User.findOne({ providerUserID: req.body.providerId, logtype: 1 }, function(err, client) {
//         if (err) {
//             return res.status(400).json('400 error');
//         }
//         //No user was found... so create a new user with values from Facebook (all the profile. stuff)
//         if (!client) {
//             console.log('save-1')
//             client = new Client({
//                 fullname: req.body.fullname,
//                 email: req.body.email,
//                 providerUserID: req.body.providerId,
//                 logtype: 1,
//                 //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
//                 // facebook: profile._json
//             });
//             console.log('save-2')
//             client.save(function(err) {
//                 if (err) console.log(err);
//                 res.status(200).json({ 'token': req.body.providerId }); // return done(err, client);
//                 // res.status(200).json("Google Registered successfully");

//             });
//         } else {
//             // const token = client.generateJwt();
//             console.log('save-3')
//             res.status(200).json({ 'token': req.body.providerId }); // return done(err, client);
//             // res.status(200).json({token});
//         }
//     });
// }
// exports.facebook_auth = (req, res) => {
//     console.log('save-0')
//     console.log(req.body.providerId);
//     User.findOne({ providerUserID: req.body.providerId, logtype: 2 }, function(err, client) {
//         if (err) {
//             return res.status(400).json('400 error');
//         }
//         //No user was found... so create a new user with values from Facebook (all the profile. stuff)
//         if (!client) {
//             console.log('save-1')
//             client = new Client({
//                 fullname: req.body.fullname,
//                 email: req.body.email,
//                 providerUserID: req.body.providerId,
//                 logtype: 2,
//                 //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
//                 // facebook: profile._json
//             });
//             console.log('save-2')
//             client.save(function(err) {
//                 if (err) console.log(err);
//                 res.status(200).json({ 'token': req.body.providerId }); // return done(err, client);
//                 // res.status(200).json("Google Registered successfully");

//             });
//         } else {
//             // const token = client.generateJwt();
//             console.log('save-3')
//             res.status(200).json({ 'token': req.body.providerId }); // return done(err, client);
//             // res.status(200).json({token});
//         }
//     });
// }
exports.userToken = (req, res) => {
    User.findById(req.userId, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else
            res.status(200).json(client)
    });
}
exports.login = (req, res) => {
    console.log('login1', req.body);
    if (!req.body.emailAddress || !req.body.hash) {
        return res.status(400).json(req.body.emailAddress);
    }
    // console.log(req)
    console.log('login2');
    passport.authenticate("user", (err, client, info) => {
      console.log('client',client);
      if(client.clientStatus != 'Archived' || client.clientStatus != 'Dismissed'){
        let token;
        if (err) {
            console.log('err');
            return res.status(200).json(false);
        }
        if (client) {
          var user = {
            email: client.emailAddress,
            accountType: client.accountType
          }
            token = jwt.sign(user, 'secret',
            {expiresIn: '4h'});
            const refreshToken = randtoken.uid(256);
            refreshTokens[refreshToken] = client.emailAddress;
            client.accessToken = token;
            client.refreshToken = refreshToken;
            res.status(200).json(client);
        } else {
            console.log('login3');
            res.status(200).json(false);
        }
      }
    })(req, res);
};
// exports.addMulti = (req, res) =>{
//     var jsonArr = [];
//     jsonArr = JSON.parse(req.body.json);
//     var infoArr = [];
//     jsonArr.forEach((element ,index)=>{
//         User.findOne({email: element[' email ']}).then(user=>{
//             if(user){
//                 infoArr.push('Failed : ' + index + 'th is existed email')
//             }else{
//                 const user = new Client();
//                 if(element[' fullname '])
//                 user.fullname = element[' fullname '];
//                 if(element[' email '])
//                     user.email = element[' email '];
//                 if(element[' phone '])
//                     user.phone = element[' phone '];
//                 if(element[' clientLocation '])
//                     user.clientLocation = element[' clientLocation '];
//                 if(element[' weddingDate '])
//                     user.weddingDate = element[' weddingDate '];
//                 if(element[' weddingCity '])
//                     user.weddingCity = element[' weddingCity '];
//                 if(element[' brideName '])
//                     user.brideName = element[' brideName '];
//                 if(element[' groomName '])
//                     user.groomName = element[' groomName '];
//                 if(element[' position '])
//                     user.position = element[' position '];
//                 user.setPassword('123456');
//                 user.save((err) => {
//                     if (err) {
//                         // res.status(500).json(err);
//                         infoArr.push('Error 500: ' + err)
//                     } else {
//                         // const token = user.generateJwt();
//                         // res.status(200).json("Registered successfully");
//                         infoArr.push('Success 200: ' + index)
//                     }
//                 });
//             }
//         })
//     })
//     res.status(200).json(infoArr)
// }
exports.update = (req, res) => {
    var role = req.type;
    var clientId = req.clientId;
    if (role == 0) {
        User.findById(req.params.id, function(err, client) {
            console.log(client)
            if (!client)
                res.status(404).send("data is not found");
            else {
                tempPass = client.hash;
                Object.assign(client, req.body);
            }
            console.log(client);
            console.log(req.body);
            if (req.body.hash != '')
                client.setPassword(req.body.hash);
            else
                client.hash = tempPass;
            client.save().then(client => {
                    res.json('client updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    } else {
        if (clientId == req.params.id) {
            User.findById(req.params.id, function(err, client) {
                if (!client)
                    res.status(404).send("data is not found");
                else {
                    tempPass = client.hash;
                    Object.assign(client, req.body);
                }
                if (req.body.hash != '')
                    client.setPassword(req.body.hash);
                else
                    client.hash = tempPass;
                client.save().then(client => {
                        res.json('client updated!');
                    })
                    .catch(err => {
                        res.status(400).send("Update not possible");
                    });
            });
        } else {
            res.json('You are not owner of this profile. So you cannot update');
        }
    }
};
exports.getParent = (req, res) =>{
    User.findById(req.body._id, function(err, client){
        if (!client)
                res.status(404).send("data is not found");
        else {
            res.status(200).json(client);
        }
    })
}
exports.updateProfile = (req, res) => {
  // var role = req.type;
  console.log('updateProfile')
  console.log(req.body)
      // var clientId = req.clientId;
      // if (role == 0){
  User.findById(req.body._id, function(err, client) {
      if (!client)
        res.status(404).send("data is not found");
      else {
        tempPass = client.hash;
        Object.assign(client, req.body);
      }
      console.log('hash',req.body.hash)
      console.log('hash client',client)
      if(req.body.Password && req.body.Password != ''){
        console.log('assign new password', req.body.Password);
        client.setPassword(req.body.Password);
      }
      else if (req.body.hash && req.body.hash != '')
          client.setPassword(req.body.hash);
      else {
          client.hash = tempPass;
      }
      client.save().then(client => {
        ///////////////////
        // const departments = ['Housekeeping', 'Back of House', 'Food and Beverage'];
        // const rolesHK = ['Linen Porter', 'Floor Porter', 'Floor Supervisor', 'Room Supervisor', 'Evening Room Attendant', 'Public Area Attendant', 'Spa Attendant', 'Valet', 'Housekeeper'];
        // const rolesBOH = ['Kitchen Porter', 'Night Kitchen Porter', 'Night Cleaners', 'Supervisor BOH (Back of House)', 'Food Runners', 'Breakfast Runners', 'Commis Chef', 'Breakfast Chef', 'Chef De Partie', 'Pastry Chef', 'Banqueting Porter'];
        // const rolesFAB = ['Waiters', 'Night Waiters', 'Night Room Service', 'Supervisor Banqueting', 'Team Leader', 'Silver Service Waiters', 'Bar Staff', 'Cloakroom', 'Concierge', 'Hostess'];
        // CustomRates.findOne({}).then(obj => {
        //   departments.forEach(element => {
        //     if(element === 'Housekeeping') {
        //       rolesHK.forEach(role => {
        //         const data = {
        //           department: 'Housekeeping',
        //           clientId: client._id,
        //           role: role,
        //           payrateU25: 0,
        //           chargerateU25:0,
        //           chargerateO25:0,
        //           payrateO25: 0,
        //         };
        //         const newObj = new CustomRates(data);
        //         newObj.save((err) => {
        //           if (err) {
        //             console.log(err)
        //             res.status(500).json(err);
        //           } else {
        //             console.log('added')
        //           }
        //         });
        //       });
        //     }
        //     else if(element === 'Back of House') {
        //       rolesBOH.forEach(role => {
        //         const data = {
        //           department: 'Back of House',
        //           clientId: client._id,
        //           role: role,
        //           payrateU25: 0,
        //           chargerateU25:0,
        //           chargerateO25:0,
        //           payrateO25: 0,
        //         };
        //         const newObj = new CustomRates(data);
        //         newObj.save((err) => {
        //           if (err) {
        //             console.log(err)
        //             res.status(500).json(err);
        //           } else {
        //             console.log('added')
        //           }
        //         });
        //       });
        //     }
        //     else {
        //       rolesFAB.forEach(role => {
        //         const data = {
        //           department: 'Food and Beverage',
        //           clientId: client._id,
        //           role: role,
        //           payrateU25: 0,
        //           chargerateU25:0,
        //           chargerateO25:0,
        //           payrateO25: 0,
        //         };
        //         const newObj = new CustomRates(data);
        //         newObj.save((err) => {
        //           if (err) {
        //             console.log(err)
        //             res.status(500).json(err);
        //           } else {
        //             console.log('added')
        //           }
        //         });
        //       });
        //     }
        //   });
        // });
        //////////////////
        res.status(200).json(client);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });
};
exports.updateClientStatus = (req, res) => {
  console.log('updateClientStatus', req.body);
  User.findById(req.body._id, function(err, client) {
      if (!client)
          res.status(404).send("data is not found");
      else {
          Object.assign(client, req.body);
      }
      console.log('client updated', client);
      client.save().then(client => {
        res.status(200).json(client);
        console.log('--client updated--', client);
      })
      .catch(err => {
          res.status(400).send("Update not possible");
      });
  });
};
exports.updateHash = (req, res) => {
    // var role = req.type;
    console.log('updateHash')
        // var clientId = req.clientId;
        // if (role == 0){
    User.findById(req.body._id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            client.setPassword(req.body.hash);
            client.save().then(client => {
                    res.status(200).json(client);
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
};
exports.delete = (req, res) => {
    // var clientId = req.clientId;
    // var role = req.type;
    // if (role == 0) {
    // User.findByIdAndDelete(req.params.id, function(err, city) {
    User.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            User.countDocuments({}, function(err1, c) {
                console.log('c')
                var tempNum = c + 1;
                User.findOne({ id: tempNum }, function(err, client) {
                    if (!client)
                        res.status(500).send("data is not found");
                    else {
                        client.id = city.id;
                        client.save().then(user => {
                                res.json('city updated!');
                            })
                            .catch(err => {
                                res.status(400).send("Update not possible");
                            });
                    }
                });
            })
        }
    });
};
exports.removeUser = (req, res) =>{
  console.log('--removeUserReq--', req.body._id)
  User.findOne({ _id: req.body._id }, function(err, user) {
    if (err)
    return res.json(err);
    else {
      console.log('user', user)
      if(user && user.accountType === 'Worker'){
        WorkerRates.find({clientId:req.body._id}, function(err, workerRates) {
          if (workerRates){
            workerRates.forEach(element => {
              WorkerRates.findOneAndDelete({ _id: element._id }, function(err) {
                if (err)
                return res.json(err);
              });
            });

            // WorkerRates.remove({_id: {$in: ids}})
          }
        });
      }
      else{
        CustomRates.find({clientId:req.body._id}, function(err, customRates) {
          if (customRates){
            customRates.forEach(element => {
              CustomRates.findOneAndDelete({ _id: element._id }, function(err) {
                if (err)
                return res.json(err);
              });
            });
          }
        });
      }
    }
  });
  User.findOneAndDelete({ _id: req.body._id }, function(err, city) {
    if (err)
    return res.json(err);
    else {
      console.log('remove')
      res.status(200);
    }
  });

}
exports.findByIdNum = (req, res) => {
    User.findOne({ id: req.body.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else
            res.status(200).json(client);
    });
}
exports.findById = (req, res) => {
    var role = req.logtype;
    // console.log(req.userId)
    if (role == 0) {
        User.findById(req.userId, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else
                res.status(200).json(client);
        });
    } else {
        // res.json('you are not admin , cannot access !');
        console.log('abc')
            // console.log(req.headers.token)
        User.findOne({ providerUserID: req.providerId }, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else
                res.status(200).json(client);
        });
    }
}
exports.getAll = (req, res) => {
  User.find({}, function(err, client) {
      if (err) {
          console.log(err);
      } else {
          res.json(client);
      }
  })
}
exports.getAllType = (req, res) => {
    User.find({accountType: req.body.accountType, parentId: ""
    })
  .exec(function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    })
}
exports.getAllSubType = (req, res) => {
    User.find({accountType: 'Client',parentId:req.body.clientId}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    })
}

// exports.updateClientVendor = (req, res) => {
    //     // var role = req.type;
    //     // var clientId = req.clientId;
    //     // if (role == 0){
    //     User.findOne({ 'email': req.body.tempEmail }, function(err, client) {
    //         if (!client)
    //             res.status(404).send("data is not found");
    //         else
    //             Object.assign(client, req.body);
    //         // client.setPassword(req.body.hash);
    //         client.save().then(client => {
    //                 res.json('client updated!');
    //             })
    //             .catch(err => {
    //                 res.status(400).send("Update not possible");
    //             });
    //     });
    // };
    // exports.delClient = (req, res) => {
    //     User.findOneAndRemove({ 'email': req.body.email }, function(err, client) {
    //         if (err) res.json(err);
    //         else res.json('Successfully removed');
    //     })
    // }

// verify
exports. setVerify = (req, res) =>{
    console.log('setVerify')
    console.log(req.body)
    jwt.verify(req.body.token, process.env.JWT_SECRET, function(err, decoded) {
        if (err){
            console.log(err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        // if everything good, save to request for use in other routes
        console.log('setVerify1')
        console.log(req.body)
        User.findOne({emailAddress:decoded.email}, function(err, client) {
            if (!client)
                res.status(404).send("data is not found");
            else {
                client.verify = true;
                client.save().then(client => {
                        res.status(200).json(client);
                    })
                    .catch(err => {
                        res.status(400).send("Update not possible");
                    });
            }
        });
    });

}
exports.emailverify = (req, res) => {
        // console.log('  sdjklfsjdklfjsadl;fjsda;fjsa;lfj;sf;js')
        var btn_link = '';
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 1);
         if(req.body.subject == 'Reset your account password'){
                 btn_link = 'http://localhost:4200/#/reset-password/' + jwt.sign({
                email: req.body.email,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            },
            process.env.JWT_SECRET);
         }else if(req.body.subject == 'Email Verification'){
            btn_link = 'http://localhost:4200/#/email-verify/' + jwt.sign({
                email: req.body.email,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
            },
            process.env.JWT_SECRET);
         }

        let HelperOptions = {
            from: 'Verify Notification',
            to: req.body.email,
            // to: 'fujingforward@gmail.com',
            subject: req.body.subject,
            html:`<html><head>
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <style>

              img {
                border: none;
                -ms-interpolation-mode: bicubic;
                max-width: 100%;
              }

              body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                -webkit-font-smoothing: antialiased;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }

              table {
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                width: 100%; }
                table td {
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top;
              }

              .body {
                background-color: #f6f6f6;
                width: 100%;
              }

              .container {
                display: block;
                margin: 0 auto !important;
                /* makes it centered */
                max-width: 580px;
                padding: 10px;
                width: 580px;
              }

              .content {
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px;
              }
              .main {
                background: #ffffff;
                border-radius: 3px;
                width: 100%;
              }

              .wrapper {
                box-sizing: border-box;
                padding: 20px;
              }

              .content-block {
                padding-bottom: 10px;
                padding-top: 10px;
              }

              .footer {
                clear: both;
                margin-top: 10px;
                text-align: center;
                width: 100%;
              }
                .footer td,
                .footer p,
                .footer span,
                .footer a {
                  color: #999999;
                  font-size: 12px;
                  text-align: center;
              }
              h1,
              h2,
              h3,
              h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                line-height: 1.4;
                margin: 0;
                margin-bottom: 30px;
              }

              h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                text-transform: capitalize;
              }

              p,
              ul,
              ol {
                font-family: sans-serif;
                font-size: 14px;
                font-weight: normal;
                margin: 0;
                margin-bottom: 15px;
              }
                p li,
                ul li,
                ol li {
                  list-style-position: inside;
                  margin-left: 5px;
              }

              a {
                color: #3498db;
                text-decoration: underline;
              }
              .btn {
                box-sizing: border-box;
                width: 100%; }
                .btn > tbody > tr > td {
                  padding-bottom: 15px; }
                .btn table {
                  width: auto;
              }
                .btn table td {
                  background-color: #ffffff;
                  border-radius: 5px;
                  text-align: center;
              }
                .btn a {
                  background-color: #ffffff;
                  border: solid 1px #3498db;
                  border-radius: 5px;
                  box-sizing: border-box;
                  color: #3498db;
                  cursor: pointer;
                  display: inline-block;
                  font-size: 14px;
                  font-weight: bold;
                  margin: 0;
                  padding: 12px 25px;
                  text-decoration: none;
                  text-transform: capitalize;
              }

              .btn-primary table td {
                background-color: #3498db;
              }

              .btn-primary a {
                background-color: #3498db;
                border-color: #3498db;
                color: #ffffff;
              }
              .last {
                margin-bottom: 0;
              }

              .first {
                margin-top: 0;
              }

              .align-center {
                text-align: center;
              }

              .align-right {
                text-align: right;
              }

              .align-left {
                text-align: left;
              }

              .clear {
                clear: both;
              }

              .mt0 {
                margin-top: 0;
              }

              .mb0 {
                margin-bottom: 0;
              }

              .preheader {
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0;
              }

              .powered-by a {
                text-decoration: none;
              }

              hr {
                border: 0;
                border-bottom: 1px solid #f6f6f6;
                margin: 20px 0;
              }
              @media only screen and (max-width: 620px) {
                table[class=body] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important;
                }
                table[class=body] p,
                table[class=body] ul,
                table[class=body] ol,
                table[class=body] td,
                table[class=body] span,
                table[class=body] a {
                  font-size: 16px !important;
                }
                table[class=body] .wrapper,
                table[class=body] .article {
                  padding: 10px !important;
                }
                table[class=body] .content {
                  padding: 0 !important;
                }
                table[class=body] .container {
                  padding: 0 !important;
                  width: 100% !important;
                }
                table[class=body] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important;
                }
                table[class=body] .btn table {
                  width: 100% !important;
                }
                table[class=body] .btn a {
                  width: 100% !important;
                }
                table[class=body] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important;
                }
              }
              @media all {
                .ExternalClass {
                  width: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                  line-height: 100%;
                }
                .apple-link a {
                  color: inherit !important;
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  text-decoration: none !important;
                }
                #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
                  font-size: inherit;
                  font-family: inherit;
                  font-weight: inherit;
                  line-height: inherit;
                }
                .btn-primary table td:hover {
                  background-color: #34495e !important;
                }
                .btn-primary a:hover {
                  background-color: #34495e !important;
                  border-color: #34495e !important;
                }
              }

            </style>
          </head>
          <body class="">
            <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
              <tbody><tr>
                <td>&nbsp;</td>
                <td class="container">
                  <div class="content">
                    <table role="presentation" class="main">
                      <tbody><tr>
                        <td class="wrapper">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                              <td>
                                <p>Hello, ${req.body.name}</p>
                                <p>${req.body.content1}</p>
                                <p>${req.body.content2}</p>
                                <p><a href="${req.body.link}">${req.body.link}</a></p>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                  <tbody>
                                    <tr>
                                      <td align="left">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                          <tbody>
                                            <tr>
                                              <td> <a href="${btn_link}" target="_blank">${req.body.btn}</a> </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p>${req.body.content3}</p>
                                <p>Thank you,</p>
                                <p>Imperial Recruitment Team</p>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>

                    <!-- END MAIN CONTENT AREA -->
                    </tbody></table>
                    <!-- END CENTERED WHITE CONTAINER -->

                    <!-- START FOOTER -->
                    <div class="footer">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td class="content-block">
                            <span class="apple-link">Imperial Recruitment, 124 Great Portland St, Fitzrovia, London W1W 6PP</span>
                            <br> You're receiving these emails as you currently have an account with us.
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <!-- END FOOTER -->

                  </div>
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody></table>
        </body></html>`
            // text: 'Verfiy Code :' + req.body.code,
        };
        transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(401).json(error)
            } else {
                return res.status(200).json(info);
            }
            // console.log('bbb');
        })
    }
    // exports.phoneverify = (req, res) => {

//     const nexmo = new Nexmo({
//         apiKey: '23fe25b0',
//         apiSecret: 'OV2v0WxOO13iLtQL',
//     });

//     const from = 8613322166930;
//     // const to = (Number)(req.body.phone);
//     const to = 8613322166930;
//     const text = req.body.code;
//     nexmo.message.sendSms(from, to, text, { type: 'unicode' }, (err, responseData) => {
//         if (err) {
//             console.log(err)
//             return res.status(401).json(err);
//         } else {
//             if (responseData.messages[0]['status'] === "0") {
//                 console.log("Message sent successfully.");
//                 return res.status(200).json("Message sent successfully.");
//             } else {
//                 console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//                 return res.status(200).json(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//             }
//         }
//     });
// }
// exports.setPhone = (req, res) => {
//     User.findById(req.body.id, function(err, client) {
//         if (!client)
//             res.status(500).send("data is not found");
//         else {
//             client.verifyStatus.phoneVerify = true;
//             client.save().then(user => {
//                     res.json('user updated!');
//                 })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// }
// exports.setPhoneEmail = (req, res) => {
//     User.findOne({email:req.email}, function(err, client) {
//         if (!client)
//             res.status(500).send("data is not found");
//         else {
//             client.verifyStatus.phoneVerify = true;
//             client.save().then(user => {
//                     res.json('user updated!');
//                 })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// }
exports.setEmail = (req, res) => {
        User.findById(req.body.id, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else {
                client.verifyStatus.emailVerify = true;
                client.save().then(user => {
                        res.json('user updated!');
                    })
                    .catch(err => {
                        res.status(400).send("Update not possible");
                    });
            }
        });
    }
    // =======   Bank  ============
exports.getAllBank = (req, res) => {
    Bank.find({}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    })
}
exports.createBank = (req, res) => {
    Bank.findById(req.body.id).then(location => {
        if (location) {
            return res.status(400).json({ reviewName: "location already exists" });
        } else {
            var location = new Bank(req.body);
            if (req.body.type != 'Fund') {
                var tempMonth = location.MaturityDate.getMonth();
                tempMonth++;
                location.topic = location.Issuer + ' - ' + location.Coupon.toFixed(2) + '% - ' + location.MaturityDate.getDate() + '/' + +tempMonth + '/' + +location.MaturityDate.getFullYear();

            } else
                location.topic = location.Issuer;
            Bank.countDocuments({}, function(err, c) {
                console.log('location count document')
                location.id = c + 1;
                location.save((err) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(location);
                    }
                });
            })
        }
    });
};

exports.updateBank = (req, res) => {
    Bank.findOne({ id: req.body.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else {
            Object.assign(client, req.body);
            console.log('updateBank')
            console.log(req.body)
            console.log(req.params.id)
            if (client.type != 'Fund') {
                var tempMonth = location.MaturityDate.getMonth();
                tempMonth++;
                client.topic = location.Issuer + ' - ' + client.Coupon.toFixed(2) + '% - ' + client.MaturityDate.getDate() + '/' + +tempMonth + '/' + +location.MaturityDate.getFullYear();
            } else
                client.topic = client.Issuer;
            client.save().then(user => {
                    res.status(200).json(client);
                })
                .catch(err => {
                    res.status(200).send("Update not possible");
                });
        }
    });

};
exports.findBank = (req, res) => {
    Bank.findOne({ id: req.params.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else {
            res.status(200).json(client)
        }
    });

};
exports.removeBank = (req, res) => {
    console.log('remove')
    Bank.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            // res.status(200).send('removed');
            Bank.countDocuments({}, function(err1, c) {
                console.log('c')
                console.log('location count document')
                Bank.findOne({ id: c }, function(err, client) {
                    if (!client)
                        res.status(500).send("data is not found");
                    else {
                        client.id = city.id;
                        Bank.save().then(user => {
                                res.json('city updated!');
                            })
                            .catch(err => {
                                res.status(400).send("Update not possible");
                            });
                    }
                });

            })
        }
    });
};
exports.removeMultiBank = (req, res) => {
    console.log('remove')
    var arrNum = req.body.prdocutIdsForDelete;
    var count;
    Bank.countDocuments({}, function(err1, c) {
        count = c;
    });
    arrNum.forEach(element => {
        Bank.findOneAndDelete({ id: element }, function(err, city) {
            if (err) {} else {}
        });
    });
    if (arrNum.length < count) {
        console.log('1')
        var forLen = count - arrNum.length;
        var reArr = [-1];
        var ind = 1;
        for (let j = 1; j <= count; j++) {
            var flag = arrNum.filter(subNum => subNum === j);
            if (!flag) {
                reArr[ind] = j;
                ind++;
            }
        }
        for (let i = inde; i <= forLen; i++) {
            Bank.findOne({ id: i }, function(err1, subbank) {
                if (!subbank) {
                    Bind.findOne({ id: reArr[i] }, function(err2, ssBank) {
                        if (ssBank) {
                            ssBank.id = i;
                            ssBank.save().then(user => {
                                    // res.json('city updated!');
                                })
                                .catch(err => {
                                    // res.status(400).send("Update not possible");
                                });
                        }
                    })
                }
            })
        }
    }
};

// =======   Request  ============
exports.getAllRequest = (req, res) => {
    Requests.find({}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['userId', 'bankId']).exec();
}
exports.getAllRequestId = (req, res) => {
    Requests.find({ userId: req.body.aId }, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['userId', 'bankId']).exec();
}
exports.addRequest = (req, res) => {
    Requests.findById(req.body.id).then(location => {
        if (location) {
            return res.status(400).json({ reviewName: "location already exists" });
        } else {
            var location = new Requests(req.body);
            Requests.countDocuments({}, function(err, c) {
                console.log('location count document')
                location.id = c + 1;
                location.save((err) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        User.findById(location.userId, function(errUser, user) {
                            if (!user) {

                            } else {
                                user.totalEquity += req.body.equity;
                                user.save().then(user => {
                                        res.status(200).json(location);
                                        // res.json('city updated!');
                                    })
                                    .catch(err => {
                                        // res.status(400).send("Update not possible");
                                    });
                            }
                        })

                    }
                });
            })
        }
    })
};

exports.updateRequest = (req, res) => {
    Requests.findOne({ id: req.body.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else {
            User.findById(client.userId, function(err, client1) {
                var tempEquity = client1.totalEquity;
                Object.assign(client, req.body);
                client.save().then(user => {
                        client1.totalEquity += req.body.equity;
                        client1.totalEquity -= tempEquity;
                        client1.save().then(userx => {
                                res.status(200).json(location);
                                // res.json('city updated!');
                            })
                            .catch(err => {
                                // res.status(400).send("Update not possible");
                            });
                        res.status(200).json(client);
                    })
                    .catch(err => {
                        res.status(200).send("Update not possible");
                    });
            })

        }
    })

};
exports.findRequest = (req, res) => {
    Bank.findOne({ id: req.params.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else {
            res.status(200).json(client)
        }
    }).populate(['userId', 'bankId']).exec();

};
exports.removeRequest = (req, res) => {
    console.log('remove')
    Requests.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            if (city) {
                User.findById(city.userId, function(err, client1) {
                    client1.totalEquity -= req.body.equity;
                    client1.save().then(userx => {
                            // res.json('city updated!');
                        })
                        .catch(err => {
                            // res.status(400).send("Update not possible");
                        });
                })
            }
            // res.status(200).send('removed');
            Requests.countDocuments({}, function(err1, c) {
                console.log('c')
                console.log('location count document')
                Requests.findOne({ id: c + 1 }, function(err, client) {
                    if (!client)
                        res.status(200).send("data is not found");
                    else {
                        client.id = city.id;
                        client.save().then(user => {
                                res.json('city updated!');
                            })
                            .catch(err => {
                                res.status(400).send("Update not possible");
                            });
                    }
                });

            })
        }
    });
};
exports.upload = (req, res) => {
    console.log('= upload')
    console.log(req.params.file)
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("OK");
}
exports.addFiles = (req, res) => {
    Addfiles.findById(req.body.userId).then(location => {
        if (location) {
            return res.status(400).json({ reviewName: "location already exists" });
        } else {
            var location = new Addfiles(req.body);
            location.date = new Date();
            location.save().then(user => {
                    res.json('city updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    })
}
exports.getFiles = (req, res) => {
    console.log('getfiles')
    Addfiles.find({ 'userId': req.body.id }, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['userId']).exec();
}
exports.getAllFiles = (req, res) => {
    Addfiles.find({}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['userId']).exec();
}
exports.forgotPassword = (req, res) => {
    User.findOne({ 'emailAddress': req.body.emailAddress }).then(user => {
        if (!user) {
            return res.status(404).json('data not found')
        } else {
          readHTMLFile((path.join(__dirname, '../public/pages/PasswordResetEmail.php')), function(err, html) {
          const name = ' ' + user.firstName;
          // link = "http://stagings.tk:5500/#/reset-password?accessToken=" + user.accessToken
         link = "http://stagings.tk:5500/#/reset-password?accessToken=" + user.accessToken
          var template = handlebars.compile(html);
          var replacements = {
            name: name,
            link: link
          };
          console.log('replacements', replacements);
          var htmlToSend = template(replacements);
          var mailOptions = {
              from: 'info@imperial.com',
              to : user.emailAddress,
              subject : 'Password Reset',
              html : htmlToSend
            };
            transport.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
                return res.status(401).json(error)
              }
            res.status(200).json('Email sent')
          });
        });
        }
    });
}
exports.resetPassword = (req, res) => {
  console.log('resetPassword', req)
    User.findOne({ 'accessToken': req.body['token'] }).then(client => {
        if (!client) {
            return res.status(404).json('data not found')
        } else {
            var user = {
              email: client.emailAddress,
              accountType: client.accountType
            }
            hash = req.body['hash']
            client.setPassword(hash);
            token = jwt.sign(user, 'secret',
            {expiresIn: '.5h'});
            const refreshToken = randtoken.uid(256);
            refreshTokens[refreshToken] = client.emailAddress;
            client.accessToken = token;
            client.refreshToken = refreshToken;
            client.save().then(client => {
                    res.status(200).json(client);
                })
                .catch(err => {
                    res.status(400).send("can not update user token");
                });
        }
    });
}
exports.delFile = (req, res) => {
    Addfiles.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            res.status(200).json('deleted')
        }
    });
}