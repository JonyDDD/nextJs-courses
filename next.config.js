/** @type {import('next').NextConfig} */
const nextConfig = {
  compilerOptions: {
    plugins: [{ name: 'typescript-plugin-css-modules' }],
  },
};

module.exports = nextConfig;
