import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // GitHub Pages base-path rules:
  // - User/Org pages: repo is "<owner>.github.io" → site served at "/" → base must be "/"
  // - Project pages: repo is anything else → site served at "/<repo>/" → base must be "/<repo>/"
  //
  // When building via GitHub Actions, GITHUB_REPOSITORY is available ("owner/repo").
  const ghRepo = process.env.GITHUB_REPOSITORY;
  const [owner, repo] = ghRepo ? ghRepo.split("/") : [undefined, undefined];
  const isUserOrOrgPages = Boolean(
    owner &&
      repo &&
      repo.toLowerCase() === `${owner.toLowerCase()}.github.io`
  );

  const prodBase = isUserOrOrgPages ? "/" : repo ? `/${repo}/` : "/";

  return {
    // Leave as "/" if using a custom domain or Lovable's hosting
    base: mode === "production" ? prodBase : "/",
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
