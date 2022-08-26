import React from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { ICON, PLUGIN_DISPLAY_TEXT, VIEW_TYPE_LEFT_SIDEBAR } from "src/constants";
import { createRoot } from 'react-dom/client';
import { LeftSidebarComponent } from "./leftSidebarComponent";

export class LeftSidebarView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_LEFT_SIDEBAR;
  }

  getIcon(): string {
    return ICON;
  }

  getDisplayText() {
    return PLUGIN_DISPLAY_TEXT;
  }

  async onOpen() {
    const root = createRoot(this.containerEl.children[1]);
    root.render(
      <React.StrictMode>
        <LeftSidebarComponent />
      </React.StrictMode>
    )
  }

  async onClose() {
    // Nothing to clean up.
  }
}