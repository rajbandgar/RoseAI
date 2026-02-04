"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamic import for MDEditor to reduce initial bundle size
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-muted rounded-md">
      <Loader2 className="h-6 w-6 animate-spin" />
      <span className="ml-2">Loading preview...</span>
    </div>
  ),
});

const CoverLetterPreview = ({ content }) => {
  return (
    <div className="py-4">
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;