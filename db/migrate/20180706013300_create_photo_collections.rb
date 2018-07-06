class CreatePhotoCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_collections do |t|
      t.integer :photo_id
      t.integer :collection_id

      t.timestamps
    end
  end
end
