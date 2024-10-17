const PlanModel = require('./PlanModel');

module.exports.getPlan = async (req, res) => {
    const myPlan = await PlanModel.find();
    res.send(myPlan)
}

module.exports.savePlan = async (req, res) => {
    const { name } = req.body;
    PlanModel.create({ name })
    .then((data) => { console.log('Plan added')
        res.send(data)
    })
}
module.exports.deletePlan = async (req, res) => {
    const {_id} = req.body;
    PlanModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a plan'))
}
module.exports.editPlan = async (req, res) => {
    const {_id, name} = req.body;
    PlanModel.findByIdAndUpdate(_id, {name})
    .then(() => res.send('Edited plan'))
}