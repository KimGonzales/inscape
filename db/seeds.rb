john = User.create!(:email => "John@example.com", :password => 'topsecret', :password_confirmation => 'topsecret')
sally = User.create!(:email => "Sally@example.com", :password => 'topsecret', :password_confirmation => 'topsecret')

img = File.open(File.join(Rails.root, 'app/assets/images/image1.jpg'))
img2 = File.open(File.join(Rails.root, 'app/assets/images/image2.jpg'))
img3 = File.open(File.join(Rails.root, 'app/assets/images/image3.jpg'))
img4 = File.open(File.join(Rails.root, 'app/assets/images/image4.jpg'))
img5 = File.open(File.join(Rails.root, 'app/assets/images/image5.jpg'))
img6 = File.open(File.join(Rails.root, 'app/assets/images/image6.jpg'))
img7 = File.open(File.join(Rails.root, 'app/assets/images/image7.jpg'))
img8 = File.open(File.join(Rails.root, 'app/assets/images/image8.jpg'))
img9 = File.open(File.join(Rails.root, 'app/assets/images/image9.jpg'))
img10 = File.open(File.join(Rails.root, 'app/assets/images/image10.jpg'))

john.photos.create!(:title =>"Chow Time", :description => "Copper Mug", :image => img, :featured_status => 1)
john.photos.create!(:title =>"Milky", :description => "Oh. You need a little dummy text for your mockup?.", :image => img2, :featured_status => 1)
john.photos.create!(:title =>"In Good Company", :description => "Lyft actually thundercats, squid poke hella gastropub. ", :image => img3, :featured_status => 1)
john.photos.create!(:title =>"Brothers", :description => "Everyday carry occupy chia humblebrag.", :image => img4, :featured_status => 1)
john.photos.create!(:title =>"Educate", :description => "Kogi whatever swag meh kale chips fashion axe.", :image => img5, :featured_status => 1)

sally.photos.create!(:title =>"Study Feels", :description => "Lorem ipsum dolor amet prism green juice next level sartorial iPhone. ", :image => img6, :featured_status => 1)
sally.photos.create!(:title =>"Spacebound", :description => "Oh. You need a little dummy text for your mockup?.", :image => img7, :featured_status => 1)
sally.photos.create!(:title =>"Good Morning", :description => "Lyft actually thundercats, squid poke hella gastropub. ", :image => img8, :featured_status => 1)
sally.photos.create!(:title =>"Sky's the Limit", :description => "Everyday carry occupy chia humblebrag.", :image => img9, :featured_status => 1)
sally.photos.create!(:title =>"Naptime", :description => "Kogi whatever swag meh kale chips fashion axe.", :image => img10, :featured_status => 1)


john.profile.update!(bio: "Umami kogi iPhone actually, put a bird on it chartreuse leggings knausgaard. Coloring book hammock jianbing cloud bread man bun.")
sally.profile.update!(bio: "Master cleanse chartreuse tacos pour-over raw denim gentrify hoodie sriracha 3 wolf moon biodiesel post-ironic.")