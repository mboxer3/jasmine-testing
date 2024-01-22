describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should not add a new server on submitServerInfor() with empty input", function () {
    // serverNameInput.value = ''
    // submitServerInfo()

    // expect(Object.keys(allServers).length).toEqual(0)
    serverNameInput.value = ''
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0)
  })

  it("should update #servertable on updateServerTable()", function () {
    // updateServerInfo()
    // updateServerTable()

    // select all "#serverTable tbody tr td" and give it an alias curTDList

    // expect (curTdList.length).toEqual(3)
    // expected (curTdList[0].innerText).toEqual("Alice")
    // expected (curTdList[1].innerText).toEqual("0.00")
    // expected (curTdList[0=2].innerText).toEqual("X")

    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // serverID = 0
    // serverTbody.innerHTML = ""
    // allServers = {};
    serverID = 0
    serverTbody.innerHTML = ""
    allServers = {};
  });
});
