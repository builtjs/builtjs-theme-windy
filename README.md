# Built.JS Theme: Windy

A Built.JS theme for small business websites with basic Tailwind styling.

## Pages
- About
- Blog
- Contact
- Home
- Services

## Content Types
### Blog item
Attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author

### Feature item
Attributes:
- title: Text
- blurb: LongText
- image: File

### Service item 
Attributes:
- title: Text
- blurb: LongText
- image: File

### Benefit item
Attributes:
- title: Text
- blurb: LongText
- image: File

### Menu item
Attributes:
- label: Text
- url: Text

## Templates
Templates specify the information architecture and visual design of a section. In this theme, they fall under the following categories:
#### Articles
An article displays the content of a single entry, such as a blog entry.
#### Banners
A banner is an attention section
#### Covers
A cover is a full height attention section
#### Lists
A list displays a collection of items
#### Forms
A form is a collection of inputs
#### Footers
A footer is a section at the bottom of a page
#### Headers
A header is a section at the top of a page that includes the main menu
#### Heads
Head components are included in the head section of a page. For example: SEO, Analytics
#### Preview covers
A Preview Cover is a linked section that leads to an Article, and displays the first item of a collection as a featured item
#### Preview lists
A Preview List displays a collection of items that have links leading to a corresponding Article

### articles.article-1
#### Content
A single Strapi entry that includes these attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author

### cover-1
#### Content
A Strapi component with the following attributes:
- preheading1: Text
- heading1: Text
- blurb1: Text
- buttons: Array<Button>

### footers.footer-1
#### Content
A collection of Strapi items that include these attributes:
- label: Text
- url: Text

### headers.headers-1
#### Content
A collection of Strapi items that include these attributes:
- label: Text
- url: Text

### preview-covers.preview-covers-1
#### Content
A single Strapi entry that includes these attributes:
- title: Text
- content: RichText
- image: File
- tags: Array<Tag>
- createdAt: Date
- author: Author