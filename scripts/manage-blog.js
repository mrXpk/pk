const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directory where blog posts are stored
const BLOG_DIR = path.join(__dirname, '..', 'src', 'content', 'blogs');
// Output file for the blog data
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'content', 'blog-data.json');

function generateBlogData() {
  // Create blogs directory if it doesn't exist
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  const blogFiles = fs.readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.md') && file !== 'README.md');

  const blogs = blogFiles.map(file => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content: markdown } = matter(content);
    
    return {
      ...data,
      content: markdown,
      slug: file.replace('.md', ''),
    };
  });

  // Sort blogs by date (newest first)
  blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Write the blog data to a JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogs, null, 2));
  
  console.log(`✨ Generated blog data for ${blogs.length} posts`);
  console.log('📝 Blog data saved to:', OUTPUT_FILE);
}

// Run the script
generateBlogData();
