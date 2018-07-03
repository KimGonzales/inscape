user = User.create!(:email => "John@example.com", :password => 'topsecret', :password_confirmation => 'topsecret')
user2 = User.create!(:email => "Sally@example.com", :password => 'topsecret', :password_confirmation => 'topsecret')

img = File.open(File.join(Rails.root, 'app/assets/images/image1.jpg'))
img2 = File.open(File.join(Rails.root, 'app/assets/images/image2.jpg'))
img3 = File.open(File.join(Rails.root, 'app/assets/images/image3.jpg'))

user.photos.create!(:title =>"Hello World", :description => "Copper Mug", :image => img, :featured_status => 1)
user.photos.create!(:title =>"Pickles", :description => " Letterpress distillery 90's, dreamcatcher you 
  probably haven't heard of them taxidermy bitters yuccie pop-up mixtape echo park kitsch.", :image => img3, :featured_status => 1)
user2.photos.create!(:title =>"my friend", :description => "Succulents kickstarter sriracha, wayfarers craft 
  beer polaroid jean shorts shabby chic everyday carry bushwick poutine unicorn. Unicorn poke gluten-free 
  cray church-key keffiyeh deep v. ", :image => img2, :featured_status => 1)