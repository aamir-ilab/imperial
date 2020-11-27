var mongoose = require('mongoose'),
    passport = require('passport');
const Job = mongoose.model('Job');
const Timesheet = mongoose.model('Timesheet');
const User = mongoose.model('User');
const Invoice = mongoose.model('Invoice');
const Payroll=  mongoose.model('Payroll');
const Payslip=  mongoose.model('Payslip');
exports.register = (req, res) => {
    console.log('aaaa');
    Job.findOne({}).then(client => {
        // if (client) {
            // return res.status(400).json({ fullname: "Job already exists" });
        // } else {
            delete req.body._id;
            console.log('cccc');
            const newClient = new Job(req.body);
            newClient.statusStr = 'Pending';
            Job.countDocuments({}, function(err, c) {
                console.log(req.body)
                console.log(newClient)
                console.log('location count document')
                newClient.id = c + 1;
                if(newClient.id < 10)
                newClient.JobId = 'JOB000' + newClient.id;
                else if(this.id < 100)
                newClient.JobId = 'JOB00' + newClient.id;
                else if(this.id < 1000)
                newClient.JobId = 'JOB0'+newClient.id;
                else
                     newClient.JobId = 'JOB'+ newClient.id.toString();
                newClient.timesheetId = [];
                newClient.save((err) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json(err);
                    } else {
                        console.log(newClient);
                        // const token = client.generateJwt();
                        res.status(200).json(newClient)
                            // res.status(200).json("Registered successfully");
                    }
                });
            })

        // }
    });
};
exports.invoiceregister = (req, res) => {
    console.log('aaaa');
    Invoice.findOne({timesheetId:req.body.timesheetId}).then(client => {
        if (client) {
            return res.status(400).json({ fullname: "Job already exists" });
        } else {
            delete req.body._id;
            console.log('cccc');
            const newClient = new Invoice(req.body);
            Job.countDocuments({}, function(err, c) {
                console.log(req.body)
                console.log(newClient)
                console.log('location count document')
                newClient.id = c + 1;
                newClient.save((err) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json(err);
                    } else {
                        console.log(newClient);
                        // const token = client.generateJwt();
                        res.status(200).json(newClient)
                            // res.status(200).json("Registered successfully");
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
//     Job.findOne({ providerJobID: req.body.providerId, logtype: 1 }, function(err, client) {
//         if (err) {
//             return res.status(400).json('400 error');
//         }
//         //No Job was found... so create a new Job with values from Facebook (all the profile. stuff)
//         if (!client) {
//             console.log('save-1')
//             client = new Client({
//                 fullname: req.body.fullname,
//                 email: req.body.email,
//                 providerJobID: req.body.providerId,
//                 logtype: 1,
//                 //now in the future searching on Job.findOne({'facebook.id': profile.id } will match because of this next line
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
//     Job.findOne({ providerJobID: req.body.providerId, logtype: 2 }, function(err, client) {
//         if (err) {
//             return res.status(400).json('400 error');
//         }
//         //No Job was found... so create a new Job with values from Facebook (all the profile. stuff)
//         if (!client) {
//             console.log('save-1')
//             client = new Client({
//                 fullname: req.body.fullname,
//                 email: req.body.email,
//                 providerJobID: req.body.providerId,
//                 logtype: 2,
//                 //now in the future searching on Job.findOne({'facebook.id': profile.id } will match because of this next line
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
exports.JobToken = (req, res) => {
    Job.findById(req.JobId, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else
            res.status(200).json(client)
    });
}
exports.login = (req, res) => {
    console.log('login1');
    if (!req.body.emailAddress || !req.body.hash) {
        return res.status(400).json(req.body.emailAddress);
    }
    // console.log(req)
    console.log('login2');
    passport.authenticate("Job", (err, client, info) => {
        console.log(client);
        let token;
        if (err) {
            console.log('err');
            return res.status(200).json(false);
        }
        if (client) {
            console.log('client');
            // token = client.generateJwt();
            res.status(200).json(client);
        } else {
            console.log('login3');
            res.status(200).json(false);
        }
    })(req, res);
};
// exports.addMulti = (req, res) =>{
//     var jsonArr = [];
//     jsonArr = JSON.parse(req.body.json);
//     var infoArr = [];
//     jsonArr.forEach((element ,index)=>{
//         Job.findOne({email: element[' email ']}).then(Job=>{
//             if(Job){
//                 infoArr.push('Failed : ' + index + 'th is existed email')
//             }else{
//                 const Job = new Client();
//                 if(element[' fullname '])
//                 Job.fullname = element[' fullname '];
//                 if(element[' email '])
//                     Job.email = element[' email '];
//                 if(element[' phone '])
//                     Job.phone = element[' phone '];
//                 if(element[' clientLocation '])
//                     Job.clientLocation = element[' clientLocation '];
//                 if(element[' weddingDate '])
//                     Job.weddingDate = element[' weddingDate '];
//                 if(element[' weddingCity '])
//                     Job.weddingCity = element[' weddingCity '];
//                 if(element[' brideName '])
//                     Job.brideName = element[' brideName '];
//                 if(element[' groomName '])
//                     Job.groomName = element[' groomName '];
//                 if(element[' position '])
//                     Job.position = element[' position '];
//                 Job.setPassword('123456');
//                 Job.save((err) => {
//                     if (err) {
//                         // res.status(500).json(err);
//                         infoArr.push('Error 500: ' + err)
//                     } else {
//                         // const token = Job.generateJwt();
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
        Job.findById(req.params.id, function(err, client) {

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
            Job.findById(req.params.id, function(err, client) {
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
exports.updateProfile = (req, res) => {
    // var role = req.type;
    console.log('updateProfile')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findById(req.body._id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            tempPass = client.hash;
            Object.assign(client, req.body);
        }
        console.log(req.body.hash)

        if (req.body.hash)
            client.setPassword(req.body.hash);
        else {
            client.hash = tempPass;
        }
        client.save().then(client => {
                res.status(200).json(client);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};
exports.updateJob = (req, res) => {
    // var role = req.type;
    console.log('updateJob')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findById(req.body._id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            Object.assign(client, req.body);
        client.save().then(client => {
                res.status(200).json(client);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });}
    });
};
exports.invoiceupdate = (req, res) => {
    // var role = req.type;
    console.log('invoiceupdate')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Invoice.findById(req.body._id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            Object.assign(client, req.body);
            // client.invoiceDate = new Date(req.body.invoiceDate);
            // client.invoiceDueDate = new Date(req.body.invoiceDueDate);
            client.save().then(client => {
                res.status(200).json(client);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
};
exports.delInvoice = (req, res) =>{
    var temp ;
    Invoice.findOneAndDelete({ id: req.body.id }, function(err, city) {
     if (err) res.json(err);
     else {
        console.log('remove')
        console.log(city)
        console.log(req.body)
        Invoice.countDocuments({}, function(err1, c) {
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
}
exports.updateHash = (req, res) => {
    // var role = req.type;
    console.log('updateHash')
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findById(req.body._id, function(err, client) {
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
    // Job.findByIdAndDelete(req.params.id, function(err, city) {
    Job.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            Job.countDocuments({}, function(err1, c) {
                console.log('c')
                var tempNum = c + 1;
                Job.findOne({ id: tempNum }, function(err, client) {
                    if (!client)
                        res.status(500).send("data is not found");
                    else {
                        client.id = city.id;
                        client.save().then(Job => {
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
    // } else if (role == 2) {
    //     if (clientId == req.params.id) {
    //         Job.findByIdAndRemove({ _id: req.params.id }, function(err, business) {
    //             if (err) res.json(err);
    //             else res.json('Successfully removed');
    //         });
    //     } else {
    //         res.json('You are not owner of this profile. You are not permited');
    //     }
    // } else {
    //     res.json('you are not permited , cannot delete !');
    // }
};
exports.findByIdNum = (req, res) => {
    Job.findOne({ id: req.body.id }, function(err, client) {
        if (!client)
            res.status(500).send("data is not found");
        else
            res.status(200).json(client);
    });
}
exports.findById = (req, res) => {
    var role = req.logtype;
    // console.log(req.JobId)
    if (role == 0) {
        Job.findById(req.JobId, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else
                res.status(200).json(client);
        });
    } else {
        // res.json('you are not admin , cannot access !');
        console.log('abc')
            // console.log(req.headers.token)
        Job.findOne({ providerJobID: req.providerId }, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else
                res.status(200).json(client);
        });
    }
}
    exports.getAll = (req, res) => {
        Job.find({}).sort({ 'createdAt': -1 }).populate(['clientId','timesheetId']).exec(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                res.json(client);
            }
        })
    }
    exports.getAllJob = (req, res) => {
      console.log('---req---', req.user)
        // Job.find({}).sort({ 'shiftDate': -1 }).populate(['clientId','timesheetId']).exec(function(err, client) {
        Job.find({}).sort({ 'createdAt': -1 }).populate({
            path: 'clientId',
            model: 'User'
        }).
        populate({
            path: 'timesheetId',
            model: 'Timesheet',
            populate: {
                path: 'workerId',
                model: 'User'
            }
        }).exec(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                res.json(client);
            }
        })
    }
    exports.getAllInvoices = (req, res) => {
        Invoice.find({}).sort({ 'invoiceDate': -1 }).populate({
            path:'timesheetId_id',
            populate:{
                path:'JobId_Id',
                model:'Job'
            }}).exec(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                res.json(client);
            }
        })
    }
    exports.getFindTimesheets = (req, res) => {
        Timesheet.find({statusStr:req.body.status}).exec(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                res.json(client);
            }
        })
    }

    exports.getAllType = (req, res) => {
        // Job.find({$or:[{statusStr: "In Progress"},{statusStr:"Completed"}]}).sort({ 'shiftDate': -1 }).exec(function(err, client) {

        Job.find({}).sort({ 'createdAt': -1 }).populate(['clientId','timesheetId']).exec(function(err, client) {
            if (err) {
                console.log(err);
            } else {
                res.json(client);
            }
        });
    }
    exports.getWorkerJob = async(req, res) =>{
        console.log('===  workedId ====')
        console.log(req.body._id)
        var timesheets = await Timesheet.find({}, '_id');
        var timesheetsArr = [];
        timesheets.forEach(ele => timesheetsArr.push(ele._id))
        console.log(timesheets);
        Job.find({timesheetId:{
            $in:timesheetsArr
        }})
  .populate('timesheetId').exec( function(err, client){
            if (!client)
                    res.status(404).send("data is not found");
            else {
                console.log(client)
                res.status(200).json(client);
            }
        })
        // Job.find({'timesheetId.workerId._id':req.body._id}).populate(['timesheetId']).exec( function(err, client){
//             Job.  find()
//   .populate('timesheetId')
//   .where({'timesheetId': {$eq: {$in 'workId': 'online'}}})
//             if (!client)
//                     res.status(404).send("data is not found");
//             else {
//                 console.log(client)
//                 res.status(200).json(client);
//             }
//         })
    }
    exports.getClientJob= (req, res) =>{
        Job.find({'clientId':req.body._id}, function(err, client){
            if (!client)
                    res.status(404).send("data is not found");
            else {
                res.status(200).json(client);
            }
        })
    }
    // exports.updateClientVendor = (req, res) => {
    //     // var role = req.type;
    //     // var clientId = req.clientId;
    //     // if (role == 0){
    //     Job.findOne({ 'email': req.body.tempEmail }, function(err, client) {
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
    //     Job.findOneAndRemove({ 'email': req.body.email }, function(err, client) {
    //         if (err) res.json(err);
    //         else res.json('Successfully removed');
    //     })
    // }

// verify
exports.emailverify = (req, res) => {
        console.log('  sdjklfsjdklfjsadl;fjsda;fjsa;lfj;sf;js')
        let HelperOptions = {
            from: 'Verify Notification',
            to: req.body.email,
            subject: 'Verify Notification',
            text: 'Verfiy Code :' + req.body.code,
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
//     Job.findById(req.body.id, function(err, client) {
//         if (!client)
//             res.status(500).send("data is not found");
//         else {
//             client.verifyStatus.phoneVerify = true;
//             client.save().then(Job => {
//                     res.json('Job updated!');
//                 })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// }
// exports.setPhoneEmail = (req, res) => {
//     Job.findOne({email:req.email}, function(err, client) {
//         if (!client)
//             res.status(500).send("data is not found");
//         else {
//             client.verifyStatus.phoneVerify = true;
//             client.save().then(Job => {
//                     res.json('Job updated!');
//                 })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         }
//     });
// }
exports.setEmail = (req, res) => {
        Job.findById(req.body.id, function(err, client) {
            if (!client)
                res.status(500).send("data is not found");
            else {
                client.verifyStatus.emailVerify = true;
                client.save().then(Job => {
                        res.json('Job updated!');
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
            client.save().then(Job => {
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
                        Bank.save().then(Job => {
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
                            ssBank.save().then(Job => {
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
    }).populate(['JobId', 'bankId']).exec();
}
exports.getAllRequestId = (req, res) => {
    Requests.find({ JobId: req.body.aId }, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['JobId', 'bankId']).exec();
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
                        Job.findById(location.JobId, function(errJob, Job) {
                            if (!Job) {

                            } else {
                                Job.totalEquity += req.body.equity;
                                Job.save().then(Job => {
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
            Job.findById(client.JobId, function(err, client1) {
                var tempEquity = client1.totalEquity;
                Object.assign(client, req.body);
                client.save().then(Job => {
                        client1.totalEquity += req.body.equity;
                        client1.totalEquity -= tempEquity;
                        client1.save().then(Jobx => {
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
    }).populate(['JobId', 'bankId']).exec();

};
exports.removeRequest = (req, res) => {
    console.log('remove')
    Requests.findOneAndDelete({ id: req.params.id }, function(err, city) {
        if (err) res.json(err);
        else {
            if (city) {
                Job.findById(city.JobId, function(err, client1) {
                    client1.totalEquity -= req.body.equity;
                    client1.save().then(Jobx => {
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
                        client.save().then(Job => {
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
    Addfiles.findById(req.body.JobId).then(location => {
        if (location) {
            return res.status(400).json({ reviewName: "location already exists" });
        } else {
            var location = new Addfiles(req.body);
            location.date = new Date();
            location.save().then(Job => {
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
    Addfiles.find({ 'JobId': req.body.id }, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['JobId']).exec();
}
exports.getAllFiles = (req, res) => {
    Addfiles.find({}, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    }).populate(['JobId']).exec();
}
exports.forgotPassword = (req, res) => {
    Job.findOne({ 'emailAddress': req.params.email }).then(client => {
        if (!client) {
            return res.status(200).json(false)
        } else {
            var newPass = Math.random().toString(20).substr(2, 6)
            client.setPassword(newPass);
            console.log('  sdjklfsjdklfjsadl;fjsda;fjsa;lfj;sf;js')
            let HelperOptions = {
                from: 'Verify Notification',
                to: req.params.email,
                subject: 'Password Reset',
                html: `
                    <h3>Hi ${client.firstName} </h3>
                    <p>You've recently requested a new password reset.</p>
                    <h3>  New Password: ${newPass}</h3>
                    <p> If you do not request a password reset. please ignore this email or reply to let us know . This password is only valid for the next 30 minutes</p>`,
            };
            transporter.sendMail(HelperOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json(error)
                } else {
                    client.save().then(Job1 => {
                            res.json('password updated!');
                        })
                        .catch(err => {
                            res.status(400).send("Update not possible");
                        });
                    return res.status(200).json(info);
                }
                // console.log('bbb');
            })
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
exports.addWorkerJob = (req, res) => {
    // var role = req.type;
    console.log('addWorkerJob')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findOne({id:req.body.id}, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            // Object.assign(client, req.body);
            if(req.body.tId == -1){
                console.log('dvdvdvv')
                client.fulfilled ++; ;
                Timesheet.countDocuments({}, function(err, c) {
                        var nowDate = new Date();
                        var tempN = 'Time'+ req.body.name +nowDate.getMilliseconds() + c ;
                        var tempTime ={
                            id:c + 1,
                            timesheetId:tempN,
                            JobId_Id:client._id,
                            JobId:client.JobId,
                            workerId: req.body.wId,
                            workerIdName:req.body.name,
                            profilePhoto: req.body.img
                        };
                        const newTime = new Timesheet(tempTime);
                                // console.log('*****')
                        console.log(newTime)
                        newTime.save().then(cli =>{
                            client.timesheetId.push(cli._id);
                                console.log('*****')
                                console.log(newTime)
                                // Job.countDocuments({}, function(err, c) {
                                //     client.id = c + 1;
                                     client.save().then(client => {
                                        console.log('5')
                                        res.status(200).json(client);
                                    })
                                    .catch(err => {
                                        console.log('2')
                                        console.log(err)
                                        res.status(400).send("Update not possible");
                                    });
                                // });
                        }).catch(err=>{
                            console.log('1')
                            console.log(err)
                            res.status(400).send('error)');
                        })
                })
                // client.workerId.push({id:req.body.wId, profilePhoto:req.body.img, workerId:req.body.name});
            }
            if(req.body.tId != -1){
                console.log('cvcvcv')
                client.fulfilled --;
                // client.workerId = client.workerId.filter((obj)=> obj.id!=req.body.wId);

                client.timesheetId = client.timesheetId.filter((obj)=> obj._id != req.body.tId);
                console.log(client.timesheetId);
                client.save().then(client => {
                    console.log('4')
                    res.status(200).json(client);
                })
                .catch(err => {
                    console.log('3')
                    console.log(err);
                    res.status(400).send("Update not possible");
                });
            }
        }

    });
};
exports.setStatusJob = (req, res) => {
    // var role = req.type;
    console.log('setStatusJob')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findOne({id:req.body.id}, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            // Object.assign(client, req.body);
            if(req.body.status == 1 || req.body.status == 2 || req.body.status == 3 ){
                if(req.body.status == 1){
                 client.statusStr = 'In Progress';
                }else if(req.body.status == 2){
                    client.statusStr = 'Submitted';
                }else if(req.body.status == 3){
                    client.statusStr = 'Completed';
                }
            }else{
                client.statusStr = req.body.status;

            }

        client.save().then(client => {
                res.status(200).json(client);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            }); }
    });
};
exports.setStatusTimesheet = (req, res) => {
    // var role = req.type;
    console.log('setStatusTimesheet')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Timesheet.findById(req.body.id, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            // Object.assign(client, req.body);
            client.statusStr = req.body.status;
                client.save().then(client => {
                                res.status(200).json(client);
                            })
                            .catch(err => {
                                res.status(400).send("Update not possible");
                            });
        }
    });
};
exports.canceljob = (req, res) => {
    // var role = req.type;
    console.log('canceljob')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findOne({id:req.body.id}, function(err, client) {
        if (!client)
            res.status(404).send("data is not found");
        else {
            // Object.assign(client, req.body);
            client.statusStr = req.body.str;
            client.save().then(client => {
                res.status(200).json(client);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
};
exports.setJobWorkers = (req, res) => {
    // var role = req.type;
    console.log('setJobWorkers')
    console.log(req.body)
        // var clientId = req.clientId;
        // if (role == 0){
    Job.findOne({id:req.body.id}, function(err, client) {
        if (!client){
            console.log('123123')
            res.status(404).send("data is not found");
        }
        else {
            client.timesheetId = [];
            req.body.str.forEach((ele,index,arry) =>{
                console.log('----------------')
                console.log(ele)
                Timesheet.countDocuments({}, function(err, c) {
                    var nowDate = new Date();
                    var tempN = 'Time'+ ele.workerId +nowDate.getMilliseconds() + c ;
                    var tempTime ={
                        id:c + 1,
                        timesheetId:tempN,
                        JobId_Id:client._id,
                        JobId:client.JobId,
                        workerId: ele.id,
                        workerIdName:ele.workerId,
                        profilePhoto: ele.profilePhoto
                    };
                    const newTime = new Timesheet(tempTime);
                            // console.log('*****')
                    // console.log(arry.length)
                    newTime.save().then(cli =>{
                        console.log('inde' + index)
                        client.fulfilled = arry.length;
                        client.timesheetId.push(cli._id);
                        console.log('(*(*(*(*(*(')

                        console.log(client.timesheetId)
                        if(index == (arry.length - 1)){
                            console.log('*****')
                            console.log(newTime)
                            console.log('ind' + index)
                            // Job.countDocuments({}, function(err, c) {
                            //     client.id = c + 1;
                                 client.save().then(client => {
                                    res.status(200).json(client);
                                })
                                .catch(err => {
                                    res.status(400).send("Update not possible");
                                });
                            // });
                        }
                    }).catch(err=>{
                        res.status(400).send('error)');
                    })
                })
                // client.timesheetId.push(ele.id);
            })
            // client.workerId = req.body.str;
            // client.save().then(client => {
            //         res.status(200).json(client);
            //     })
            //     .catch(err => {
            //         res.status(400).send("Update not possible");
            //     });
        }

    });
};
exports.removeTimesheetsJob = (req, res) =>{
    req.body.arr.forEach((ele, index, arra)=>{
    Timesheet.findByIdAndDelete(ele._id, function(err, city) {
            if (err) res.json(err);
            else {
                if(index == (arra.length -1)){
                    res.status(200).json(city);
                }
            }
        });
    })

}
exports.removeJob = (req, res) =>{
    var temp ;
      Job.findOneAndDelete({ id: req.body.id }, function(err, city) {
        if (err) res.json(err);
        else {
            console.log('remove')
            console.log(city)
            console.log(req.body)
            Job.countDocuments({}, function(err1, c) {
                    console.log('c')
                    var tempNum = c + 1;
                    Job.findOne({ id: tempNum }, function(err, client) {
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
}


exports.getAllPayroll = (req, res) => {
    Payroll.find({}).sort({ 'timestamp': -1 }).exec(function(err, client) {
        if (err) {
            console.log(err);
        } else {
            res.json(client);
        }
    })
}
exports.getGenerateWorkerID = async(req, res) => {
    console.log('getGereanteworkerID')
    var nowDay = new Date().getDay();
    if(nowDay == 0){
        nowDay = 7;
    }
    var gtDate = new Date();
    gtDate.setDate(gtDate.getDate() - nowDay);
    gtDate.setHours(23,59,59);
    var gt1Date = new Date();
    gt1Date.setDate(gt1Date.getDate() - nowDay - 6);
    gt1Date.setHours(0,0,0);
    // var gt2Date = new Date();
    // gt2Date.setDate(gt2Date.getDate() - nowDay - 7);

    // const userArrObj = await User.find({createdDate:{ $gte: gt1Date, $lte: gtDate}});
    const userArrObj = await User.find({accountType:'Worker', createdDate:{ $gte: gt1Date, $lte: gtDate}});
    // periodStart:{$gte:gt1Date,$lte:gtDate}
    userArrObj.forEach((ele,index,arry) =>{
        Payroll.findOne({}).then(client => {
            if (client)
                return res.status(200).json({ fullname: "Job already exists" });
            // } else {
                delete req.body._id;
                console.log('cccc');
                var tempObj ={
                    workerId : ele._id,
                    periodStart : gt1Date,
                    periodEnd : gtDate,
                    type : "Generated IDs",
                    response : "Successful",
                    firstName : 'Admin',
                    lastName : '',
                    timestamp : new Date(),
                }
                const newClient = new Payroll(tempObj);

                Payroll.countDocuments({}, function(err, c) {
                    console.log(req.body)
                    console.log(newClient)
                    console.log('location count document')
                    newClient.id = c + 1;
                    if(newClient.id < 10)
                    newClient.logID = 'LOG000' + newClient.id;
                    else if(this.id < 100)
                    newClient.logID = 'LOG00' + newClient.id;
                    else if(this.id < 1000)
                    newClient.logID = 'LOG0'+newClient.id;
                    else
                         newClient.JobId = 'LOG'+ newClient.id.toString();
                    newClient.save((err) => {
                        if (err) {
                            console.log(err)
                            res.status(500).json(err);
                        } else {
                            console.log(newClient);
                            if(index == (arry.length - 1)){
                                Payroll.find({},function(err, cresult){
                                    if(cresult){
                                          res.status(200).json(cresult)
                                    }
                                })
                            }
                        }
                    });
                })

            // }
        });
        // userArr.push(ele._id);

    })
}
exports.getExpertTimesheets = async(req, res) => {
    console.log('getExpertTimesheets')
    var nowDay = new Date().getDay();
    if(nowDay == 0){
        nowDay = 7;
    }
    var gtDate = new Date();
    gtDate.setDate(gtDate.getDate() - nowDay);
    gtDate.setHours(23,59,59);
    var gt1Date = new Date();
    gt1Date.setDate(gt1Date.getDate() - nowDay - 6);
    gt1Date.setHours(0,0,0);

    // const userArrObj = await User.find({createdDate:{ $gte: gt1Date, $lte: gtDate }});
    // var userArr = [];
    // userArrObj.forEach(ele =>{
    //     userArr.push(ele._id);
    // })
    const userArrObj = await Timesheet.find({
            $and:[
            {statusStr:'Completed'},
            {shiftDate:{ $gte: gt1Date, $lte: gtDate }},
        ]
    }
            ).populate(['workerId','JobId_Id']);
            console.log(userArrObj)
    var tempObj = {};
    userArrObj.forEach(ele =>{
        if(!tempObj[ele.workerId._id]){
            tempObj[ele.workerId._id] = 0 + (ele.JobId_Id.endTime-ele.JobId_Id.startTime);
        }else{
            tempObj[ele.workerId._id] += ele.JobId_Id.endTime-ele.JobId_Id.startTime;
        }
    })
    console.log('tempObj')
    console.log(Object.keys(tempObj))
    if(Object.keys(tempObj).length == 0){
        res.status(200).json('no Data')
    }
    // periodStart:{$gte:gt1Date,$lte:gtDate}
    Object.keys(tempObj).forEach((ele,index,arry) =>{
        Payroll.findOne({}).then((client) => {
            // if (client)
            //     return res.status(200).json({ fullname: "Job already exists" });
                    var tempRate = 1;
                 var tempObj1 ={
                    workerId : ele,
                    WR_UNITS: ele * tempRate,
                    WR_TRNCDE :'p001',
                    periodStart : gt1Date,
                    periodEnd : gtDate,
                    type : "Export Timesheets",
                    response : "Successful",
                    firstName : 'Admin',
                    lastName : '',
                    timestamp : new Date(),
                }
                const newClient = new Payroll(tempObj1);

                Payroll.countDocuments({}, function(err, c) {
                    console.log(req.body)
                    console.log(newClient)
                    newClient.id = c + 1;
                    if(newClient.id < 10)
                    newClient.logID = 'LOG000' + newClient.id;
                    else if(this.id < 100)
                    newClient.logID = 'LOG00' + newClient.id;
                    else if(this.id < 1000)
                    newClient.logID = 'LOG0'+newClient.id;
                    else
                         newClient.logID = 'LOG'+ newClient.id.toString();
                    newClient.save((err) => {
                        if (err) {
                            console.log(err)
                            res.status(500).json(err);
                        } else {
                            console.log(newClient);
                            if(index == (arry.length - 1)){
                                Payroll.find({},function(err, cresult){
                                    if(cresult){
                                          res.status(200).json(cresult)
                                    }
                                })
                            }
                        }
                    });
                })
            });
    })
}
exports.getImportPayroll = async(req, res) => {
    console.log('getImportPayroll')
    Date.prototype.getWeek = function() {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                              - 3 + (week1.getDay() + 6) % 7) / 7);
      }
      Date.prototype.getWeekYear = function() {
        var date = new Date(this.getTime());
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        return date.getFullYear();
      }
      function getDateOfISOWeek(w, y) {
        var simple = new Date(y, 0, 1 + (w - 1) * 7);
        var dow = simple.getDay();
        var ISOweekStart = simple;
        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }
    var nowDay = new Date().getWeek();
      nowDay --;
    // if(nowDay == 0){
    //     nowDay = 7;
    // }
    // gtDate.setDate(gtDate.getDate() - nowDay);
    // gtDate.setHours(23,59,59);
    // var gt1Date = new Date();
    // gt1Date.setDate(gt1Date.getDate() - nowDay - 6);
    // gt1Date.setHours(0,0,0);
    var reqResultArr = req.body.linesR;
    reqResultArr.pop();
    reqResultArr.filter(ele => ele[0] != '');
    reqResultArr.forEach(async(ele, index, arry)=>{
                console.log('ele[0]')
                var eleArr = ele[0].split(',');
                var nameArr = eleArr[1].toString().split(' ');
                console.log(eleArr[1])
                var status = 'Successful';
                var userInfo = await User.findOne({workerId: eleArr[1],forename:nameArr[1],surename:nameArr[2]},'_id');
                console.log(userInfo)
                if(!userInfo)
                    status = 'Failed';
                Payslip.find({WEEK_NO:nowDay}).then(result =>{
                        console.log('Payslip')
                        console.log(result)
                        if(result.length > 0){}else{
                            console.log('132')
                            console.log(eleArr)
                        var tempObj1 ={
                            workerIDStr:eleArr[0],
                            Names:eleArr[1],
                            TAX:eleArr[2],
                            NI_EES:eleArr[3],
                            GROSS_TO_DATE:eleArr[4],
                            TAX_TO_DATE:eleArr[5],
                            NI_TO_DATE:eleArr[6],
                            TOTAL_DEDUCTIONS:eleArr[7],
                            NET_PAY_PREV:eleArr[8],
                             NET_PAY:eleArr[9],
                            NI_CODE:eleArr[10],
                            PAY_DATE:eleArr[11],
                            WEEK_NO:eleArr[12],
                            TAX_CODE:eleArr[13],
                            WK1M1:eleArr[14],
                            NI_NUMBER:eleArr[15],
                            STUDENT_LOAN:eleArr[16],
                            PENSION:eleArr[17],
                        }
                        const newClient = new Payslip(tempObj1);
                        if(userInfo)
                            newClient.workerId = userInfo._id;
                        console.log('newClient')
                        Payslip.countDocuments({}, function(err, c) {
                            console.log(newClient)
                            newClient.id = c + 1;
                            if(newClient.id < 10)
                            newClient.payslipID = 'PAYSLIP000' + newClient.id;
                            else if(this.id < 100)
                            newClient.payslipID = 'PAYSLIP00' + newClient.id;
                            else if(this.id < 1000)
                            newClient.payslipID = 'PAYSLIP0'+newClient.id;
                            else
                                 newClient.payslipID = 'PAYSLIP'+ newClient.id.toString();
                            newClient.save((err) => {
                                if (err) {
                                    console.log(err)
                                    res.status(500).json(err);
                                } else {
                                    console.log(newClient);
                                    Payroll.find({logID:'123j12kl3j1ljl'}).then(client => {
                                        console.log(' ---------------------')
                                        var periodStartDate = getDateOfISOWeek(tempObj1.WEEK_NO,new Date(tempObj1.PAY_DATE).getFullYear());
                                        console.log(periodStartDate)
                                        var periodEndDate = periodStartDate;
                                        periodEndDate.setDate(periodEndDate.getDate()+ 6);
                                        console.log(periodEndDate)

                                        console.log(' ---------------------')
                                        if (client.length > 0){console.log('aaa');console.log(client)}else{
                                            var tempObj2 ={
                                                // workerId : eleArr[1],
                                                periodStart : periodStartDate,
                                                periodEnd : periodEndDate,
                                                type : "Import Payroll",
                                                response : status,
                                                firstName : 'Admin',
                                                lastName : '',
                                                timestamp : new Date(),
                                                payslipId:newClient._id
                                            }
                                            const newClient2 = new Payroll(tempObj2);
                                            if(userInfo)
                                                newClient2.workerId = userInfo._id;
                                            Payroll.countDocuments({}, function(err, c) {
                                                console.log(req.body)
                                                console.log(newClient2)
                                                newClient2.id = c + 1;
                                                if(newClient2.id < 10)
                                                newClient2.logID = 'LOG000' + newClient2.id;
                                                else if(this.id < 100)
                                                newClient2.logID = 'LOG00' + newClient2.id;
                                                else if(this.id < 1000)
                                                newClient2.logID = 'LOG0'+newClient2.id;
                                                else
                                                    newClient2.logID = 'LOG'+ newClient2.id.toString();
                                                newClient2.save((err) => {
                                                    if (err) {
                                                        console.log(err)
                                                        res.status(500).json(err);
                                                    } else {
                                                        console.log(newClient2);
                                                        if(index == (arry.length - 1)){
                                                            Payroll.find({},function(err, cresult){
                                                                if(cresult){
                                                                    res.status(200).json(cresult)
                                                                }
                                                            })
                                                        }
                                                    }
                                                });
                                            })
                                        }
                                    });
                                }
                            });
                        })
                    }
            })
    })
    // console.log(nowDay)
    //     if(result){}else{

    //     }
    // })
    // console.log(req.body.linesR);
    // const userArrObj = await Timesheet.find({
    //         $and:[
    //         {statusStr:'Completed'},
    //         {shiftDate:{ $gte: gt1Date, $lte: gtDate }},
    //     ]
    // }
    //         ).populate(['workerId','JobId_Id']);
    //         console.log(userArrObj)
    // var tempObj = {};
    // userArrObj.forEach(ele =>{
    //     if(!tempObj[ele.workerId._id]){
    //         tempObj[ele.workerId._id] = 0 + (ele.JobId_Id.endTime-ele.JobId_Id.startTime);
    //     }else{
    //         tempObj[ele.workerId._id] += ele.JobId_Id.endTime-ele.JobId_Id.startTime;
    //     }
    // })
    // console.log('tempObj')
    // console.log(tempObj)
    // Object.keys(tempObj).forEach((ele,index,arry) =>{
    //     Payroll.findOne({periodStart:{$gte:gt1Date,$lte:gtDate}}).then(client => {
    //         if (client)
    //             return res.status(200).json({ fullname: "Job already exists" });
    //                 var tempRate = 1;
    //              var tempObj1 ={
    //                 workerId : ele,
    //                 WR_UNITS: ele * tempRate,
    //                 WR_TRNCDE :'xxx',
    //                 periodStart : gt1Date,
    //                 periodEnd : gtDate,
    //                 type : "Export Timesheets",
    //                 response : "Successful",
    //                 firstName : 'Admin',
    //                 lastName : '',
    //                 timestamp : new Date(),
    //             }
    //             const newClient = new Payroll(tempObj1);

    //             Payroll.countDocuments({}, function(err, c) {
    //                 console.log(req.body)
    //                 console.log(newClient)
    //                 newClient.id = c + 1;
    //                 if(newClient.id < 10)
    //                 newClient.logID = 'LOG000' + newClient.id;
    //                 else if(this.id < 100)
    //                 newClient.logID = 'LOG00' + newClient.id;
    //                 else if(this.id < 1000)
    //                 newClient.logID = 'LOG0'+newClient.id;
    //                 else
    //                      newClient.JobId = 'LOG'+ newClient.id.toString();
    //                 newClient.save((err) => {
    //                     if (err) {
    //                         console.log(err)
    //                         res.status(500).json(err);
    //                     } else {
    //                         console.log(newClient);
    //                         if(index == (arry.length - 1)){
    //                             Payroll.find({},function(err, cresult){
    //                                 if(cresult){
    //                                       res.status(200).json(cresult)
    //                                 }
    //                             })
    //                         }
    //                     }
    //                 });
    //             })
    //         });
    // })
}
