import express from "express";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/order.controller.js";
import adminAuth from "../middleware/admin.middleware.js";
import authUser from "../middleware/auth.middleware.js";

const orderRouter = express.Router();

//Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User features
orderRouter.post("/userorders", authUser, userOrders);

//Verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
