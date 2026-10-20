module.exports = function(eleventyConfig) {
eleventyConfig.addPassthroughCopy("bootstrap.min.css");
eleventyConfig.addPassthroughCopy("custom.css");
eleventyConfig.addPassthroughCopy("bootstrap.bundle.min.js");
eleventyConfig.addPassthroughCopy("gm-media");
eleventyConfig.addPassthroughCopy("publications/**/*.pdf");
eleventyConfig.addPassthroughCopy("food-resilience/**/*.pdf");
eleventyConfig.addPassthroughCopy("human-ecology/**/*.pdf");
eleventyConfig.addPassthroughCopy("traditional-agriculture-in-southeast-asia/**/*.pdf");

// Preserve original HTML filenames and directory structure.
eleventyConfig.addGlobalData("permalink", () => {
return (data) =>
`${data.page.filePathStem}.${data.page.outputFileExtension}`;
});
};