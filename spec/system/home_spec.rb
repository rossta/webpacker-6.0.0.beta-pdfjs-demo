require "rails_helper"

RSpec.describe "Home" do
  it "renders home page" do
    visit "/"
    binding.pry

    expect(page).to have_content("Homepage")
    expect(page).to have_content("Success!")
  end
end
