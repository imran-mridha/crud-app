import React from "react";
import "./DataTable.css";

const DataTable = () => {
  return (
    <div>
      <div class="Title">
        <p>This is a Table</p>
      </div>
      <div class="Table">
      
      <div class="Heading">
        <div class="Cell">
          <p>Heading 1</p>
        </div>
        <div class="Cell">
          <p>Heading 2</p>
        </div>
        <div class="Cell">
          <p>Heading 3</p>
        </div>
        <div class="Cell">
          <p>Heading 3</p>
        </div>
        <div class="Cell">
          <p>Heading 3</p>
        </div>
      </div>
      <div class="Row">
        <div class="Cell">
          <p>Row 1 Column 1</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 2</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 3</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 3</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 3</p>
        </div>
      </div>
      <div class="Row">
        <div class="Cell">
          <p>Row 2 Column 1</p>
        </div>
        <div class="Cell">
          <p>Row 2 Column 2</p>
        </div>
        <div class="Cell">
          <p>Row 2 Column 3</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 3</p>
        </div>
        <div class="Cell">
          <p>Row 1 Column 3</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DataTable;
