class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :feed_id
      t.string :title
      t.string :url
      t.text :content
      t.datetime :published_at

      t.timestamps
    end
  end
end
