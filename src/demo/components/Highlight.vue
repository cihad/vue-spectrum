<template>
	<pre><code :class="className"><span class="source" v-html="highlighted"></span></code></pre>
</template>

<script>
import hljs from 'highlight.js'

function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

export default {
	props: ["language", "code", "autodetect"],
	data: function() {
		return {
			detectedLanguage: "",
      unknownLanguage: false,
      highlighted: null
		};
  },
	computed: {
		className() {
			if (this.unknownLanguage) return "";

			return "hljs " + this.detectedLanguage;
    },
		autoDetect() {
			return !this.language || hasValueOrEmptyAttribute(this.autodetect);
		},
		ignoreIllegals() {
			return true;
		}
  },
  beforeMount() {
    this.highlight()
  },
  beforeUpdate() {
    this.highlight()
  },
  methods: {
    highlight() {
			// no idea what language to use, return raw code
			if (!this.autoDetect && !hljs.getLanguage(this.language)) {
				console.warn(`The language "${this.language}" you specified could not be found.`);
        this.unknownLanguage = true;
        this.highlighted = escapeHTML(this.code);
				return 
			}

			let result;
			if (this.autoDetect) {
				result = hljs.highlightAuto(this.code);
				this.detectedLanguage = result.language;
			} else {
				result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
				this.detectectLanguage = this.language;
      }
      
      this.highlighted = result.value;
			return
		},
  }
};
</script>

<style>
pre {
  background: var(--spectrum-global-color-gray-75);
  padding: 18px;
  border-radius: 4px;
  overflow-x: auto;
  white-space: pre-wrap;
}

pre.example {
  border-radius: 4px 4px 0 0;
  margin-bottom: 0;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
.spectrum {
  --hljs-color: var(--spectrum-global-color-gray-800);
  --hljs-background: var(--spectrum-global-color-gray-75);
  --hljs-keyword-color: var(--spectrum-global-color-fuchsia-700);
  --hljs-section-color: var(--spectrum-global-color-red-600);
  --hljs-string-color: var(--spectrum-global-color-green-600);
  --hljs-literal-color: var(--spectrum-global-color-purple-700);
  --hljs-attribute-color: var(--spectrum-global-color-indigo-700);
  --hljs-class-color: var(--spectrum-global-color-seafoam-600);
  --hljs-function-color: var(--spectrum-global-color-blue-600);
  --hljs-variable-color: var(--spectrum-global-color-magenta-700);
  --hljs-title-color: var(--spectrum-global-color-indigo-700);
  --hljs-comment-color: var(--spectrum-global-color-gray-700);
}

/** for now keep syntax highlighting different from prop table. we can join them later if need be,
 *  though since they don't really represent the same things,
 *  i think the prop table should get renames and new classes
 */

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: var(--hljs-color);
  background: var(--hljs-background);
}

.hljs-comment,
.hljs-quote {
  color: var(--hljs-comment-color);
  font-style: italic;
}

.hljs-doctag,
.hljs-formula,
.hljs-keyword {
  color: var(--hljs-keyword-color);
}

.hljs-deletion,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-subst {
  color: var(--hljs-section-color);
}

.hljs-literal,
.hljs-number {
  color: var(--hljs-literal-color);
}

.hljs-string {
  color: var(--hljs-string-color);
}

.hljs-attr,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string,
.hljs-regexp {
  color: var(--hljs-attribute-color);
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: var(--hljs-class-color);
}

.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: var(--hljs-variable-color);
}

.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
  color: var(--hljs-title-color);
}

.hljs-function {
  color: var(--hljs-function-color);
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}

.source {
  display: block;
  padding: 0.5em;
  color: var(--hljs-color);
  background: var(--hljs-background);

  text-align: left;
  word-spacing: normal;
  word-break: break-all;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.embedded.source {
  display: inline;
  padding: 0;
}

.constant {
  color: var(--hljs-literal-color);
}

.storage.type,
.storage.modifier,
.constant.color,
.support.property-value.css {
  color: var(--hljs-keyword-color);
}

.entity.function,
.support.function {
  color: var(--hljs-function-color);
}

.keyword.control {
  color: var(--hljs-keyword-color);
}

.class-name {
  color: var(--hljs-class-color);
}

.entity.attribute-name {
  color: var(--hljs-attribute-color);
}
.entity.name.tag,
.support.type {
  color: var(--hljs-section-color);
}

.punctuation.section {
  color: var(--hljs-title-color);
}

.variable.other.object.property {
  color: var(--hljs-variable-color);
}

.string.quoted {
  color: var(--hljs-string-color);
}

.comment {
  color: var(--hljs-comment-color);
  font-style: italic;
}
</style>