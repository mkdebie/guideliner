<template>
  <v-container>
      <v-row dense>
        <v-col 
            sm="12"
            md="4">
                <v-card
                    elevation="3"
                    shaped
                >
                    <v-card-title>Database information</v-card-title>
                    <v-card-text>
                        <div>
                            Total Guidelines
                        </div>
                        <div>
                            Total Recommendations : {{this.params.lengte}} 
                        </div>
                        <div>
                            Total prerquisites
                        </div>
                        <div>
                            Distribution of evidence
                        </div>
                    </v-card-text>
                </v-card>
          </v-col>

        <v-col 
            sm="12"
            md="4">
                <v-card
                    elevation="3"
                    shaped
                >
                <v-card-title>Navigation</v-card-title>
                    <v-card-text>
                        <div> 
                            <v-text-field
                                label="Search by keyword"
                            ></v-text-field>
                        </div>
                    </v-card-text>
                </v-card>
        </v-col>

        <v-col 
            sm="12"
            md="4">
                <v-card
                    elevation="3"
                    rounded
                >
                    Information card 3
                </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import TutorialDataService from "../services/TutorialDataService";

    export default {
    name: 'App',

  data() {
   return {

    params: {},
  }},

  methods: {
    getParams() {
      TutorialDataService.getParams()
      .then((response) => {
        this.params.lengte = response.data.lengte;
      })
    }
  },

  mounted() {
      console.log("getting Params")
    this.getParams();
  }
};
</script>
