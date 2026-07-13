export function pageLoad(contentContainer) {
  const testDiv = document.createElement("div");
  testDiv.innerText = "This is a test";
  contentContainer.append(testDiv);
}
