"use client";
import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import React from "react";
import FlowEditor from "./FlowEditor";
import Topbar from "./topbar/Topbar";
function Editor({ workflow }: { workflow: Workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar
          title="Workflow Editor"
          subTitle={workflow.name}
          workflowId={workflow.id}
        />
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
