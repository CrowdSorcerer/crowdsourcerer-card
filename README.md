# Crowdsourcerer Lovelace Card

A custom card for Home Assistant for use with the Crowdsourcerer integration

Based on [@iantrich](https://www.github.com/iantrich)'s boilerplate card

## Instaling on Home Assistant Manually 

### Step 1

Copy the files from `/dist` to the `www` folder in your Home Assistant installation's config folder
(create the `www` folder if it does not exist)

### Step 2

Enable "Advanced Mode" in HA under profile settings

### Step 3

Edit a dashboard view, by clicking the 3 dots in the upper right corner of a dashboard
(you may be asked to take control of the dashboard, try creating a new dashboard instead to experiment)

### Step 4

While editing the dashboard, click the 3 dots once more and select "Manage Resources"

### Step 5

Add `crowdsourcerer-card.js` as a module, using the URL `/local/crowdsourcerer-card.js`

A HA reboot may be needed for changes to take effect

### Step 6

You can now add the card to the dashboard. Back in the dashboard editor, click "ADD CARD".
The new card should show up in the list as "Custom: Crowdsourcerer Card".

If the card does not show up, click the 3 dots in the dashboard editor, then "Raw configuration editor".
Then, add the following under the "cards:" tag and save
```yaml
- type: custom:crowdsourcerer-card
```