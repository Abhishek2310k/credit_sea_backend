"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loanController_1 = require("../Controller/loanController");
var router = (0, express_1.Router)();
// Define the routes
router.post('/loan/add', loanController_1.createLoan);
router.get('/loans', loanController_1.getLoansByRole);
router.get('/loans/user', loanController_1.getLoans);
router.patch('/loans/verifier', loanController_1.updateLoanStatusVerifier);
router.patch('/loans/admin', loanController_1.updateLoanStatusAdmin);
router.get('/loans/summary', loanController_1.getLoanSummary);
exports.default = router;
