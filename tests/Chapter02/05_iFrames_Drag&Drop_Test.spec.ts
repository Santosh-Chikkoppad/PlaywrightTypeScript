import { test, expect } from '@playwright/test';

// Login test
test('Handling Drag and Drop', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/');

  const iframe = await page.frameLocator('[class="demo-frame"]')

  // drag Element and Drop Element
 const dragElement =  iframe.locator('[id="draggable"]');
 const dropElement  = iframe.locator('[id="droppable"]');

  await dragElement.dragTo(dropElement);

});