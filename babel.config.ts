require("@babel/register")({
  extensions: [".ts", ".js"],
});

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};
