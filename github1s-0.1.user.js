// ==UserScript==
// @name         github1s
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/scripts.php
// @icon         https://cdn.jsdelivr.net/gh/edge-iris/oss@oss/image/svg+xml/2022/03/30/13/550616486197061648619706208wxkXUJ.svg
// @grant        none
// @include      https://github.com
// @include      https://github.com/*/*
// ==/UserScript==
(function () {
  'use strict';
  const node = document.getElementsByTagName("header").item(0);
  const nav = node.querySelector(".UnderlineNav-body");
  if (nav != null) {
    const target = location.href.replace("github", "github1s");
    const li = document.createElement("li");
    li.setAttribute("data-view-component", true);
    li.className = "d-inline-flex";
    li.innerHTML = `
    <a id="settings-tab" href="${target}" target="_blank" data-tab-item="i7settings-tab" data-selected-links="code_review_limits codespaces_repository_settings collaborators custom_tabs hooks integration_installations interaction_limits issue_template_editor key_links_settings notifications repo_announcements repo_branch_settings repo_custom_properties repo_keys_settings repo_pages_settings repo_protected_tags_settings repo_rule_insights repo_rules_bypass_requests repo_rulesets repo_settings_copilot_coding_guidelines repo_settings_copilot_content_exclusion repo_settings reported_content repository_actions_settings_add_new_runner repository_actions_settings_general repository_actions_settings_runner_details repository_actions_settings_runners repository_actions_settings repository_environments role_details secrets_settings_actions secrets_settings_codespaces secrets_settings_dependabot secrets security_analysis security_products /iakii/PCMaster/settings" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Settings&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
      <svg t="1648619107024" class="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline" style="cursor: pointer;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21506" width="16" height="16">
        <path d="M465.981 1001.74a89.578 89.578 0 0 1-89.889-88.955l-0.356-63.666c-176.662 38.422-213.927-74.93-213.927-74.93-28.895-73.372-70.523-92.873-70.523-92.873-57.61-39.446 4.364-38.645 4.364-38.645 63.71 4.452 97.28 65.447 97.28 65.447 56.631 97.058 148.569 69.009 184.765 52.803 5.699-41.049 22.172-69.053 40.337-84.947-141.045-16.028-289.303-70.523-289.303-313.79 0-69.32 24.799-125.952 65.447-170.429-6.589-16.028-28.316-80.584 6.144-168.025 0 0 53.337-17.052 174.659 65.09a609.28 609.28 0 0 1 158.943-21.37c53.915 0.223 108.276 7.257 159.031 21.37C814.186 6.679 867.434 23.73 867.434 23.73c34.549 87.485 12.822 152.042 6.233 168.025 40.693 44.433 65.358 101.109 65.358 170.43 0 243.89-148.57 297.583-289.926 313.299 22.751 19.723 43.053 58.323 43.053 117.582 0 84.992-0.312 119.674-0.312 119.674a89.622 89.622 0 0 1-89.8 89H465.98z" fill="#59636e" p-id="21507">
        </path>
      </svg>
      <span data-content="Settings">Github1s</span>
      <span id="settings-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>
    </a>
    `;
    nav.appendChild(li);
  }
})();
