const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    user_id: {
      type: String,
      require: true,
      max: 20,
    },
    SKU: {
      type: String,
      max: 20,
    },
    name: {
      type: String,
      required: true,
      max: 50,
    },
    description: {
      type: String,
      min: 6,
    },
    from: {
      type: String,
      default: "",
      max: 200,
    },
    img: {
      type: String,
      default: "",
    },
    units: {
      type: String,
      default: 1,
    },
    invoice: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    in_tracking: {
      type: String,
      max: 100,
      default: "",
    },
    in_shipper: {
      type: String,
      max: 50,
      default: "",
      
    },
    package_lengh: {
      type: Number,

    },
    package_width: {
        type: Number,

    },
    package_height: {
        type: Number,
  
    },
    weight: {
        type: Number,
      
    },
    purchased_by: {
      type: String,
      max: 50,
    },
    purchased_date: {
      type: Date,
    
    },
    arrived_date: {
        type: Date,
    
      },
      shipped_date: {
        type: Date,
    
      },
      notes: {
        type: String,
        max: 500,
      },
    combined_package_id: {
      type: Array,
      default: [],
    },
    out_tracking: {
        type: String,
        max: 100,
        default: "",
      },
      out_shipper: {
        type: String,
        max: 50,
        default: "",
        
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);