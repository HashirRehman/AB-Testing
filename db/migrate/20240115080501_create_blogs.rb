class CreateBlogs < ActiveRecord::Migration[7.1]
  def change
    create_table :blogs do |t|
      t.text :article
      t.integer :page_view
      t.integer :click_count
      t.integer :sign_up
      t.timestamps
    end
  end
end
