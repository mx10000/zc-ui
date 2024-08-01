import "./icon/iconfont.css";
import "./icon/iconfont.js";
// register globally

const req = require.context("./svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
