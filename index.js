function tool_tip() {
    const tool_tip = document.getElementsByClassName("tool-tip")[0];
    tool_tip.classList.toggle("hide");
}

const tool_tip_img = document.getElementsByClassName("tool-tip-img")[0];
tool_tip_img.setAttribute("onmouseover", "tool_tip()");
tool_tip_img.setAttribute("onmouseout", "tool_tip()");

function enableRecipeLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('recipe-card');
  const recipeImg = document.getElementById('recipe-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/recipe-login-logo-white.png';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/recipe-login-logo.png';
  });
}

function enableProffyLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('proffy-card');
  const recipeImg = document.getElementById('proffy-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/Proffy_logo-white.svg';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/Proffy_logo.svg';
  });
}

function enableHappyLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('happy-card');
  const recipeImg = document.getElementById('happy-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/happy-logo-white.svg';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/happy-logo.svg';
  });
}

function enableEcoletaLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('ecoleta-card');
  const recipeImg = document.getElementById('ecoleta-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/Ecoleta_logo-white.svg';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/Ecoleta_logo.svg';
  });
}

function enableFinanceLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('finance-card');
  const recipeImg = document.getElementById('finance-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/goFinance-white.svg';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/goFinance.svg';
  });
}

function enableGitExplorerLogSwitchOnHoverBlur() {
  const recipeCard = document.getElementById('git-card');
  const recipeImg = document.getElementById('git-pic');

  recipeCard.addEventListener('mouseover', () => {
    recipeImg.src = 'src/images/github-Explorer-white.svg';
  });

  recipeCard.addEventListener('mouseout', () => {
    recipeImg.src = 'src/images/github-Explorer.svg';
  });
}

window.onload = () => {
  enableRecipeLogSwitchOnHoverBlur();
  enableProffyLogSwitchOnHoverBlur();
  enableHappyLogSwitchOnHoverBlur();
  enableEcoletaLogSwitchOnHoverBlur();
  enableFinanceLogSwitchOnHoverBlur();
  enableGitExplorerLogSwitchOnHoverBlur();
}
