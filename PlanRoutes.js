const { Router } = require('express');
const { getPlan, savePlan, deletePlan, editPlan } = require('./PlanController')
const router = Router();

router.get('/', getPlan);
router.post('/savePlan', savePlan);
router.post('/deletePlan', deletePlan);
router.put('/editPLan', editPlan)


module.exports = router;
