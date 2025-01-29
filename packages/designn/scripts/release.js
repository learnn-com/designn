const fs = require("fs");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
const versionType = args[0] || "patch"; // Accepts "patch", "minor", "major" or a specific version like "1.2.3"

console.log(`Releasing new ${versionType} version...`);

function isWorkingDirectoryClean() {
  try {
    const status = execSync("git status --porcelain").toString().trim();
    return status === "";
  } catch (error) {
    console.error("Error checking git status:", error);
    return false;
  }
}

if (!isWorkingDirectoryClean()) {
  console.error("Working directory is not clean. Please commit or stash your changes before releasing.");
  process.exit(1);
}

try {
  execSync(`pnpm version ${versionType} --no-git-tag-version`, { stdio: "inherit" });

  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));
  const newVersion = packageJson.version;

  console.log(`Version updated to ${newVersion}`);

  execSync(`git add package.json`, { stdio: "inherit" });
  execSync(`git commit -m "v${newVersion}"`, { stdio: "inherit" });
  execSync(`git tag v${newVersion}`, { stdio: "inherit" });
  execSync(`git push origin master --tags`, { stdio: "inherit" });

  console.log(`Git tag v${newVersion} pushed.`);

  execSync(`bash .github/scripts/publish-package.sh`, { stdio: "inherit" });

  console.log(`Package v${newVersion} published successfully.`);
} catch (error) {
  console.error("Release failed:", error instanceof Error ? error.message : error);
  process.exit(1);
}