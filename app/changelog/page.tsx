import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";

interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: "new" | "improved" | "fixed";
    description: string;
  }[];
}

export default function ChangelogPage() {
  const changelog: ChangelogEntry[] = [
    {
      version: "2.4.0",
      date: "March 25, 2025",
      changes: [
        {
          type: "new",
          description: "Added 50 new finance and cryptocurrency icons",
        },
        {
          type: "new",
          description:
            "Introduced variable stroke weight customization for all icon styles",
        },
        {
          type: "improved",
          description:
            "Enhanced Figma integration with better component organization",
        },
        {
          type: "improved",
          description: "Optimized SVG file sizes by 15% across all icons",
        },
        {
          type: "fixed",
          description: "Fixed SVG export issues with complex gradients",
        },
        {
          type: "fixed",
          description: "Resolved alignment issues in several arrow icons",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <main className="pt-32 pb-24">
        <div className="eden-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl  text-white mb-4">Changelog</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Stay up to date with the latest improvements, additions, and fixes
              to our icon collections.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {changelog.map((entry, index) => (
              <div key={index} className="relative pb-12">
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center z-10 relative">
                      <span className="text-primary font-semibold">
                        {entry.version.split(".")[2] === "0"
                          ? entry.version.split(".").slice(0, 2).join(".")
                          : entry.version.split(".")[2]}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <h2 className="text-xl  text-white">
                        Version {entry.version}
                      </h2>
                      <span className="text-white/50 text-sm sm:ml-4">
                        {entry.date}
                      </span>
                    </div>
                    <div className="bg-[#141413] backdrop-blur-sm rounded-xl border border-white/10 p-6">
                      <ul className="space-y-4">
                        {entry.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex gap-3">
                            <span
                              className={`inline-flex h-6 px-2 items-center rounded-full text-xs font-medium ${
                                change.type === "new"
                                  ? "bg-green-500/20 text-green-400"
                                  : change.type === "improved"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-amber-500/20 text-amber-400"
                              }`}
                            >
                              {change.type === "new"
                                ? "New"
                                : change.type === "improved"
                                ? "Improved"
                                : "Fixed"}
                            </span>
                            <span className="text-white/80">
                              {change.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
