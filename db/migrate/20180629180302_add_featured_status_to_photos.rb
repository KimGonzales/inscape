class AddFeaturedStatusToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :featured_status, :integer, :default => 1
  end
end
