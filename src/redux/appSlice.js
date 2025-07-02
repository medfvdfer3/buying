import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../data/products"; // ✅ import المنتجات الكاملة

// ✅ تحميل بيانات السلة والمستخدم من localStorage
let cartProducts = [];
let userInfo = null;

try {
  const cartData = localStorage.getItem("cartProducts");
  cartProducts = cartData ? JSON.parse(cartData) : [];
} catch (err) {
  console.warn("Error parsing cartProducts from localStorage:", err);
}

try {
  const userData = localStorage.getItem("userInfo");
  userInfo = userData ? JSON.parse(userData) : null;
} catch (err) {
  console.warn("Error parsing userInfo from localStorage:", err);
}

// ✅ الحالة الابتدائية
const initialState = {
  products: cartProducts, // المنتجات داخل السلة
  userInfo: userInfo, // بيانات المستخدم
  allProducts: allProducts, // كل المنتجات في الموقع
};

// ✅ حفظ السلة تلقائيًا في localStorage
const saveCartToLocalStorage = (products) => {
  localStorage.setItem("cartProducts", JSON.stringify(products));
};

// ✅ Slice
const appSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {
    //  إضافة أو تحديث منتج في السلة
    addToCart: (state, action) => {
      const existing = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity = action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      saveCartToLocalStorage(state.products);
    },

    // ⬆️ زيادة الكمية
    increment: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        saveCartToLocalStorage(state.products);
      }
    },

    // ⬇️ تقليل الكمية (مع الحد الأدنى 1)
    decrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        saveCartToLocalStorage(state.products);
      }
    },

    // ❌ إزالة منتج معين
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      saveCartToLocalStorage(state.products);
    },

    // 🧹 تفريغ السلة
    removeAll: (state) => {
      state.products = [];
      saveCartToLocalStorage([]);
    },

    // 👤 تسجيل دخول المستخدم
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    // 🚪 تسجيل خروج المستخدم
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

// ✅ تصدير الـ actions والـ reducer
export const {
  addToCart,
  increment,
  decrement,
  removeItem,
  removeAll,
  setUser,
  logoutUser,
} = appSlice.actions;

export default appSlice.reducer;
