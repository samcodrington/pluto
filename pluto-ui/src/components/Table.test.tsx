import React from "react";
import { shallow } from "enzyme";
import Table from "./Table";
import sinon from "sinon";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
chai.use(chaiEnzyme());

const defaultProps = {
  rows: [[{ data: "defaultdata" }, { data: "1" }, { data: "2" }]],
};

const createTable = (props?: object) =>
  shallow(<Table {...Object.assign(defaultProps, props)} />);

describe("Table Unit Tests", function () {
  it("renders without crashing", () => {
    const table = createTable();
    expect(table).to.be.present();
  });

  it("displays correct number of rows", () => {
    const table = createTable();
    const correctNumOfRows = defaultProps.rows.length; // plus one row for title?
    expect(table).toContainMatchingElements(correctNumOfRows, "tr");
  });

  it("mouseover, mouseout is applied to rows, mouseclick is applied to cells", () => {
    const mouseOverSpy = sinon.spy();
    const mouseOutSpy = sinon.spy();
    const mouseClickSpy = sinon.spy();

    const table = createTable({
      onRowMouseOverFn: mouseOverSpy,
      onRowMouseOutFn: mouseOutSpy,
      onMouseClickFn: mouseClickSpy,
    });

    const tr = table.find("tr");
    tr.simulate("mouseover");
    expect(mouseOverSpy.calledOnce).to.be.ok("MouseoverFn not called");
    expect(mouseOverSpy.firstCall.args[0].target.nodeName).to.be(
      "tr",
      "MouseOverSpy Targets wrong thing"
    );
    tr.simulate("mouseout");
    expect(mouseOutSpy.calledOnce).to.be.ok("Mouseoutfn not called");
    expect(mouseOutSpy.firstCall.args[0].target.nodeName).to.be("tr");

    const td = table.find("td");
    td.simulate("mouseclick");
    expect(mouseClickSpy.calledOnce).to.be.ok("Mouseclickfn not called");
    expect(mouseClickSpy.firstCall.args[0].target.nodeName).to.be("td");
  });
});
