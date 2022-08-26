import React from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { ICON, PLUGIN_DISPLAY_TEXT, VIEW_TYPE_TODOS } from "src/constants";
import { createRoot } from 'react-dom/client';
import { TodosComponent } from "./todosComponent";

export class TodosView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_TODOS;
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
        <TodosComponent />
      </React.StrictMode>
    )
  }

  async onClose() {
    // Nothing to clean up.
  }
}