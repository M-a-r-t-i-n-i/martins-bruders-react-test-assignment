# README

## Web site component structure

### List of components

- might need diversify TitleHeading components (child of MainFrame). I.e. One TitleHeading parent component, with XXTitle children, according to the necessity and attributes of that certain title.
- might need to rethink if all images have the switcher buttons, but hidden in most; or only for images in the cart
- might need to rethink if all totals are part of the TotalsFrame, or special component in Cart for the various totals there.
- consider putting ItemInfo in the same hierarchy as ItemDescriptionPlaceholder.
- might need to rethink if the Price component can be a part of the ItemTitleAndPrice component, of need to be separate to be able to have a separate location (detached from other ItemTitleAndPrice components) in the PDP component.

### Organization of site by components

Main React Component (where all the pages and sections are)

- Category (rectangle 2134)

  - Header (Menu bar)
    - LOGO (looks like a refresh button or return to top)
    - Navigation (shop by)
      - Men
      - Women
      - Kids
    - Actions
      - Currency switcher
      - Cart
  - Title ("Category name" heading)
  - Product Card A
    - Product Card elements
      - Item image
      - Add to cart button
      - layout spacer base (?)
      - Product description
        - Title
        - Price
  - Product Card B
    - Product Card elements
      - Item image
      - Add to cart button
      - layout spacer base (?)
      - Product description
        - Title
        - Price
  - Product Card C
    - Product Card elements
      - Item image
      - Add to cart button
      - layout spacer base (?)
      - Product description
        - Title
        - Price
  - Product Card D
    - Product Card elements
      - Item image
      - Add to cart button
      - layout spacer base (?)
      - Product description
        - Title
        - Price
  - Product Card E
    - Product Card elements
      - Item image
      - Add to cart button
      - layout spacer base (?)
      - Product description
        - Title
        - Price

- Cart Overlay (rectangle 2134)
  Header, Title, Product Card components mentioned in Category parent component

      - Frame of the Cart Overlay [maybe should be moved in the Category component ?]
      	- Cart overview
      		- Title
      		- Chosen items frame
      			- An item
      				- Product image
      				- Magnifier
      					- +
      					- -
      					- Title of magnifier size (number)
      				- Elements of item in bag
      					- Item title and price
      						- Item title
      						- Item price
      					- Item size selector
      						- Title of selector (Size)
      						- Available Size
      							-     - XS
      							-     - S
      							-     - M
      							-     - L
      					- Item color selector
      						- Title of selector (Color)
      						- Available Color
      							-     - Green
      							-     - Beige
      							-     - Maroon
      			- Another item
      				- Product image
      				- Magnifier
      						- +
      						- -
      						- Title of magnifier size (number)
      				- Elements of item in bag
      					- Item title and price
      						- Item title
      						- Item price
      					- Item size selector
      						- Title of selector
      						- Available Size
      							-     - S
      							-     - M
      					- Item color selector
      						- Title of selector
      						- Available Color
      							-     - Black
      							-     - Orange
      							-     - Magenta
      		- Total sum frame
      	- Actions
      		- View Bag button
      			- button name
      		- Checkout button
      			- button name
      - Rectangle holding everything together, except frame of the Cart Overlay and Header (Rectangle 692) [maybe should be moved in the Category component ?]

- Currency Switcher (rectangle 2134)
  Header, Title, Product Card components mentioned in Category parent component

      - Frame of the Currency Menu (the current Currency and Shopping cart components are included in the Header (located in the Category component))
      	- EUR label
      	- $ label
      	- YEN label

- PDP (rectangle 2134)
  Header component mentioned in Category parent component. No Title and Product Card. This is a window for product details that opens over the main window (?) - Product details - main section - Item Image - Product description - Title - Product category - Item size selector - Available Size - Size title - XS - S - M - L - Price section - Item price - Color section - Available Color - Grey - Black - Green - Add to Cart button - Button label - Description text

- Cart (rectangle 2134)
  Header and Title components mentioned in Category parent component. No Product Card. This also is a window for product details that opens over the main window (?)

- Selected Items - main section

  - First Item description - Title - Product category - Item price - Item size selector - Title of selector (Size) - Available Size - XS - S - M - L - Item color selector - Title of Color (Color) - Available Color - Grey - Black - Green

    - Magnifier
      - -
      - -
      - Title of magnifier size (number)
    - Item Image section
      - Item Image
      - Image switcher button section
        - Image switcher button right
        - Image switcher button left

  - Second Item description - Title - Product category - Item price - Item size selector - Title of selector (Size) - Available Size - S - M - Item color selector - Title of Color (Color) - Available Color - Magenta - Black - Orange

    - Magnifier
      - -
      - -
      - Title of magnifier size (number)
    - Item Image section
      - Item Image
      - Image switcher button section
        - Image switcher button right
        - Image switcher button left

  - Totals (sum and items)
    - Order button
    - Selected Items info section
      - Tax
        - Title
        - Tax sum
      - Quantity
        - Title
        - Quantity sum
      - Total Sum
        - Title
        - Amount of Total Sum

Category, Cart Overlay, Currency Switcher, PDP, Cart are parent components. Children of Main React Component
