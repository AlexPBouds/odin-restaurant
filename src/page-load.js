export function pageLoad(contentContainer, currentTab) {
  contentContainer.innerHTML = "";
  contentContainer.append(currentTab);
}
