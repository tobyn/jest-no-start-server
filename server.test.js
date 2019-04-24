describe("The server", () => {
  it("should render the expected title", async () => {
    await page.goto("http://localhost:8080");
    expect(await page.title()).toEqual("Hello, World!");
  });
});
