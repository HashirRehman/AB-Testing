# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

[
  {
    article: "Discover the app embraced by 18 million users.",
    page_view: 0,
    sign_up: 0,
    click_count: 0,
    ctr: 0,
  },
  {
    article: "Unleash the power of the app with 18 million users.",
    page_view: 0,
    sign_up: false,
    click_count: 0,
    ctr: 0,
  },
  {
    article: "Join the community of 18 million users with this app.",
    page_view: 0,
    sign_up: false,
    click_count: 0,
    ctr: 0,
  },
  {
    article: "Embark on a journey with the app loved by 18 million users.",
    page_view: 0,
    sign_up: false,
    click_count: 0,
    ctr: 0,
  }
].each do |x|
  Blog.create(x)
end
