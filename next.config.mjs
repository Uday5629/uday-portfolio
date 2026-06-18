/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile three and the react-three stack (incl. its bundled reconciler) in
  // the same module layer as the app's React. This makes @react-three/fiber's
  // react-reconciler read ReactCurrentOwner from the same React instance and
  // fixes "Cannot read properties of undefined (reading 'ReactCurrentOwner')".
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "react-reconciler",
  ],
};
export default nextConfig;
