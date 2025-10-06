import React from 'react';
import { FileText, Hash, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface SearchResult {
  title: string;
  url: string;
  type: "page" | "heading" | "cookbook";
  parentPage?: string;
  description?: string;
}

interface SearchResultProps {
  results: SearchResult[];
  onResultClick: (result: SearchResult) => void;
  selectedIndex: number;
}

const SearchResult: React.FC<SearchResultProps> = ({ results, onResultClick, selectedIndex }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "page":
        return <FileText className="h-4 w-4" />;
      case "heading":
        return <Hash className="h-4 w-4" />;
      case "cookbook":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const labels: Record<string, string> = {
      page: "Page",
      heading: "Section",
      cookbook: "Cookbook",
    };
    
    if (type === "cookbook") {
      return (
        <Badge variant="secondary" className="text-xs bg-blue-100 hover:bg-blue-100 dark:bg-blue-950">
          {labels[type] || type}
        </Badge>
      );
    }
    
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      page: "default",
      heading: "secondary",
    };
    
    return (
      <Badge variant={variants[type] || "default"} className="text-xs">
        {labels[type] || type}
      </Badge>
    );
  };

  return (
    <div className="py-2">
      {results.length === 0 ? (
        <p className="px-4 py-2 text-sm text-muted-foreground">No results found.</p>
      ) : (
        <div className="divide-y">
          {results.map((result, idx) => (
            <button
              key={idx}
              className={`w-full text-left px-4 py-3 hover:bg-accent transition-colors ${
                selectedIndex === idx ? "bg-accent" : ""
              }`}
              onClick={() => onResultClick(result)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-muted-foreground">{getIcon(result.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm truncate">{result.title}</p>
                    {getTypeBadge(result.type)}
                  </div>
                  {result.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                  )}
                  {result.parentPage && (
                    <p className="text-xs text-muted-foreground mt-1">in {result.parentPage}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
