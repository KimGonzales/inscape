# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship : A User has many photos
- [x] Include at least one belongs_to relationship : A Photo belongs to a User
- [x] Include at least one has_many through relationship : A Profile has many Photos through User
- [x] The "through" part of the has_many through includes at least one user submittable attribute. User can submit profile bio and change #featured_status of its photos. 
- [X] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
- [X] Include a class level ActiveRecord scope method (Photo model has best_photo. see at /best-photo)
- [x] Include signup :  with Devise
- [x] Include login : with Devise
- [x] Include logout : with Devise
- [x] Include third party signup/login : with Devise and Facebook Omniauth
- [x] Include nested resource show or index : profile photos have index
- [x] Include nested resource "new" form : used dynamic routes for profile/:profile_id/photos
- [x] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [x] The application is pretty DRY
- [x] Limited logic in controllers
- [x] Views use helper methods if appropriate
- [x] Views use partials if appropriate