---
layout: default
header: Variabel Jekyll
title: Variabel Jekyll
categories: Examples
---

## Templates

There must be a two templates in the Jekyll includes path; pnefor individual comments and one for the comments section as a whole. Filenames can be set in `_config.yaml`.

The following variables are available:

There must be a two templates in the Jekyll includes path; pnefor individual comments and one for the comments section as a whole. Filenames can be set in _config.yaml.

The following variables are available:

Comments template

Variable	Description
{{ subcomments }}	Boolean; false if this is the top level of comments
{{ comments }}	The comments on this thread level
{{ comment_url }}	Link to the file and line no of the comment section on GitHub's edit pageThere must be a two templates in the Jekyll includes path; pnefor individual comments and one for the comments section as a whole. Filenames can be set in _config.yaml.

The following variables are available:

Comments template

Variable	Description
{{ subcomments }}	Boolean; false if this is the top level of comments
{{ comments }}	The comments on this thread level
{{ comment_url }}	Link to the file and line no of the comment section on GitHub's edit page
