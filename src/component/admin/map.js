import React from "react";
import mapboxgl from "mapbox-gl";
import $ from "jquery";
import diseases from "../main/details.json";
import * as d3 from "d3";
var jsondata;
    $.ajax({
      type: "GET",
      url: "https://api.jsonbin.io/b/5e8d72f7980e481b8aa0c506",
      headers:{
        "secret-key": "$2b$10$4Oyd.tdNstTqOgfK74Nn2OmD4XXl1cF0YhywD.cqSublDJ87WR/l6",
      },
      contentType: "application/json",
      dataType:"json",
      success: function(result) {
        jsondata=result;
        //console.log(jsondata);
        jsondata.features.forEach(f => {
          if (f.properties.disease) {
            console.log(f.properties.disease);
          }
        })
      },error: function(data){
        alert("Unable to add");
    }
    });
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHJhZG5lc2gwOCIsImEiOiJjazc4bm1rMjUwaDJxM21ueXozeWxjaTl2In0.xneS2KANPf7rTW4lx2o4-g";
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [77.1025, 28.7041],
      zoom: 1.8
    });
    
    var c = [];
    while (c.length < 497) {
        do {
            var color = Math.floor((Math.random()*1000000)+1);
        } while (c.indexOf(color) >= 0);
        c.push("#" + ("000000" + color.toString(16)).slice(-6));
    }
    console.log(c);

    const malaria = ['==', ['get', 'disease'], 'Malaria'];
    const dengue = ['==', ['get', 'disease'], 'Dengue'];
    const angioedema = ['==', ['get', 'disease'], 'Angioedema'];
    const asthma = ['==', ['get', 'disease'], 'Asthma'];
    const colors = ['#8dd3c7','#ffffb3','#bebada','#fb8072'];
    
    const disease1 = ['==', ['get', 'disease'], 'Abdominal Pain'];
    const disease2 = ['==', ['get', 'disease'], 'Alcohol Abuse and Alcoholism'];
    const disease3 = ['==', ['get', 'disease'], 'Anxiety'];
    const disease4 = ['==', ['get', 'disease'], 'Appendicitis'];
    const disease5 = ['==', ['get', 'disease'], 'Autism'];
    const disease6 = ['==', ['get', 'disease'], 'Acquired Immuno Deficiency Syndrome'];
    const disease7 = ['==', ['get', 'disease'], "Alzheimer's Disease"];
    const disease8 = ['==', ['get', 'disease'], 'Anaemia'];
    const disease9 = ['==', ['get', 'disease'], 'Arthritis'];
    const disease10 = ['==', ['get', 'disease'], 'Asthma'];
    const disease11 = ['==', ['get', 'disease'], 'Airbag Eye Injury'];
    const disease12 = ['==', ['get', 'disease'], 'Atherosclerosis'];
    const disease13 = ['==', ['get', 'disease'], 'Astigmatism'];
    const disease14 = ['==', ['get', 'disease'], 'Aphakia'];
    const disease15 = ['==', ['get', 'disease'], 'Anisometropia'];
    const disease16 = ['==', ['get', 'disease'], 'Aniseikonia'];
    const disease17 = ['==', ['get', 'disease'], 'Asbestos-related diseases'];
    const disease18 = ['==', ['get', 'disease'], 'Amblyopia'];
    const disease19 = ['==', ['get', 'disease'], 'Ankyloblepharon'];
    const disease20 = ['==', ['get', 'disease'], 'Abnormal uterine bleeding'];
    const disease21 = ['==', ['get', 'disease'], 'Antepartum hemorrhage (Bleeding in late pregnancy)'];
    const disease22 = ['==', ['get', 'disease'], 'Abducens nerve Palsy'];
    const disease23 = ['==', ['get', 'disease'], 'Breast Cancer / Carcinoma'];
    const disease24 = ['==', ['get', 'disease'], 'Bronchitis'];
    const disease25 = ['==', ['get', 'disease'], 'Bedsores'];
    const disease26 = ['==', ['get', 'disease'], 'Back Pain'];
    const disease27 = ['==', ['get', 'disease'], "Bell's Palsy"];
    const disease28 = ['==', ['get', 'disease'], 'Brain Tumour'];
    const disease29 = ['==', ['get', 'disease'], 'Benign Essential Blepharospasm'];
    const disease30 = ['==', ['get', 'disease'], 'Band Shaped Keratopathy'];
    const disease31 = ['==', ['get', 'disease'], 'Burns'];
    const disease32 = ['==', ['get', 'disease'], 'Blepharochalasis'];
    const disease33 = ['==', ['get', 'disease'], 'Bruxism (Teeth Grinding)'];
    const disease34 = ['==', ['get', 'disease'], 'Cancer'];
    const disease35 = ['==', ['get', 'disease'], 'Carpal Tunnel Syndrome'];
    const disease36 = ['==', ['get', 'disease'], 'Chickenpox'];
    const disease37 = ['==', ['get', 'disease'], 'Chikungunya Fever'];
    const disease38 = ['==', ['get', 'disease'], 'Cholera'];
    const disease39 = ['==', ['get', 'disease'], 'Coronary Heart Disease'];
    const disease40 = ['==', ['get', 'disease'], 'Chronic obstructive pulmonary disease (COPD)'];
    const disease41 = ['==', ['get', 'disease'], 'Conjunctivochalasis'];
    const disease42 = ['==', ['get', 'disease'], 'Conjunctival Concretions'];
    const disease43 = ['==', ['get', 'disease'], 'Corona(covid-19)'];
    const disease44 = ['==', ['get', 'disease'], 'Cervical cancer'];
    const disease45 = ['==', ['get', 'disease'], 'Colorectal Cancer'];
    const disease46 = ['==', ['get', 'disease'], 'Chemical Injuries to the Eyes'];
    const disease47 = ['==', ['get', 'disease'], 'Computer Vision Syndrome'];
    const disease48 = ['==', ['get', 'disease'], 'Child maltreatment (child abuse)'];
    const disease49 = ['==', ['get', 'disease'], 'Congenital Capillary Haemangioma of Eyelid'];
    const disease50 = ['==', ['get', 'disease'], 'Corneal Abrasion'];
    const disease51 = ['==', ['get', 'disease'], 'Chalcosis'];
    const disease52 = ['==', ['get', 'disease'], 'Commotio Retinae'];
    const disease53 = ['==', ['get', 'disease'], 'Cavities'];
    const disease54 = ['==', ['get', 'disease'], 'Cleft Lip and Cleft Palate'];
    const disease55 = ['==', ['get', 'disease'], 'Diarrhea'];
    const disease56 = ['==', ['get', 'disease'], 'Deafness'];
    const disease57 = ['==', ['get', 'disease'], 'Dementia'];
    const disease58 = ['==', ['get', 'disease'], 'Diabetes Mellitus'];
    const disease59 = ['==', ['get', 'disease'], "Down's Syndrome"];
    const disease60 = ['==', ['get', 'disease'], 'Dracunculiasis (guinea-worm disease)'];
    const disease61 = ['==', ['get', 'disease'], 'Disabilities'];
    const disease62 = ['==', ['get', 'disease'], 'Dermatochalasis'];
    const disease63 = ['==', ['get', 'disease'], 'Distichiasis'];
    const disease64 = ['==', ['get', 'disease'], 'Double Elevator Palsy'];
    const disease65 = ['==', ['get', 'disease'], 'Digit-Sucking (Thumb/ Finger-Sucking)'];
    const disease66 = ['==', ['get', 'disease'], 'Eczema'];
    const disease67 = ['==', ['get', 'disease'], 'Endometriosis'];
    const disease68 = ['==', ['get', 'disease'], 'Epilepsy'];
    const disease69 = ['==', ['get', 'disease'], 'Epidemic dropsy'];
    const disease70 = ['==', ['get', 'disease'], 'Epiblepharon'];
    const disease71 = ['==', ['get', 'disease'], 'Epicanthus'];
    const disease72 = ['==', ['get', 'disease'], 'Euryblepharon'];
    const disease73 = ['==', ['get', 'disease'], 'Ectopic pregnancy'];
    const disease74 = ['==', ['get', 'disease'], 'Exposure Keratopathy'];
    const disease75 = ['==', ['get', 'disease'], 'Eyelid Varix'];
    const disease76 = ['==', ['get', 'disease'], 'Early pregnancy loss'];
    const disease77 = ['==', ['get', 'disease'], 'Eclampsia'];
    const disease78 = ['==', ['get', 'disease'], 'Fracture (Bone fracture)'];
    const disease79 = ['==', ['get', 'disease'], 'Fibroids'];
    const disease80 = ['==', ['get', 'disease'], 'Food Poisoning'];
    const disease81 = ['==', ['get', 'disease'], 'Filamentary Keratitis'];
    const disease82 = ['==', ['get', 'disease'], 'Fluorosis'];
    const disease83 = ['==', ['get', 'disease'], 'Floppy Eyelid Syndrome'];
    const disease84 = ['==', ['get', 'disease'], 'Factitious Keratoconjunctivitis'];
    const disease85 = ['==', ['get', 'disease'], 'Fibromyalgia'];
    const disease86 = ['==', ['get', 'disease'], 'Female genital mutilation'];
    const disease87 = ['==', ['get', 'disease'], 'Gastro-Esophageal Reflux Disease (GERD)'];
    const disease88 = ['==', ['get', 'disease'], 'Goitre'];
    const disease89 = ['==', ['get', 'disease'], 'Gonorrhea'];
    const disease90 = ['==', ['get', 'disease'], 'Guillain-BarrÃ© syndrome'];
    const disease91 = ['==', ['get', 'disease'], 'Gaming disorder'];
    const disease92 = ['==', ['get', 'disease'], 'Gum disease'];
    const disease93 = ['==', ['get', 'disease'], 'Hepatitis'];
    const disease94 = ['==', ['get', 'disease'], 'Herpes Simplex'];
    const disease95 = ['==', ['get', 'disease'], 'Haemophilia'];
    const disease96 = ['==', ['get', 'disease'], 'Hemangioma'];
    const disease97 = ['==', ['get', 'disease'], 'Helminthiasis (Soil-transmitted helminth infections)'];
    const disease98 = ['==', ['get', 'disease'], 'Human papillomavirus (HPV) infection and cervical cancer'];
    const disease99 = ['==', ['get', 'disease'], 'Heat-Related Illnesses and Heat waves'];
    const disease100 = ['==', ['get', 'disease'], 'Hand, Foot and Mouth Disease'];
    const disease101 = ['==', ['get', 'disease'], 'Hypermetropia'];
    const disease102 = ['==', ['get', 'disease'], 'Hypervitaminosis A'];
    const disease103 = ['==', ['get', 'disease'], 'Ichthyosis'];
    const disease104 = ['==', ['get', 'disease'], 'Inflammatory Bowel Disease'];
    const disease105 = ['==', ['get', 'disease'], 'Insomnia'];
    const disease106 = ['==', ['get', 'disease'], 'Iron Deficiency Anemia'];
    const disease107 = ['==', ['get', 'disease'], 'Infertility'];
    const disease108 = ['==', ['get', 'disease'], 'Intrauterine growth restriction (IUGR)'];
    const disease109 = ['==', ['get', 'disease'], 'Japanese Encephalitis'];
    const disease110 = ['==', ['get', 'disease'], 'Jaundice'];
    const disease111 = ['==', ['get', 'disease'], 'Kala-azar/ Leishmaniasis'];
    const disease112 = ['==', ['get', 'disease'], 'Kyasanur forest disease'];
    const disease113 = ['==', ['get', 'disease'], 'Keratoconus'];
    const disease114 = ['==', ['get', 'disease'], 'Keratoglobus'];
    const disease115 = ['==', ['get', 'disease'], 'Lichen Planus'];
    const disease116 = ['==', ['get', 'disease'], 'Leprosy'];
    const disease117 = ['==', ['get', 'disease'], 'Leukemia'];
    const disease118 = ['==', ['get', 'disease'], 'Lymphoedema'];
    const disease119 = ['==', ['get', 'disease'], 'Ligneous Conjunctivitis'];
    const disease120 = ['==', ['get', 'disease'], 'Low Vision and VisuaI Aids'];
    const disease121 = ['==', ['get', 'disease'], 'Lid Imbrication Syndrome'];
    const disease122 = ['==', ['get', 'disease'], 'Lagophthalmos'];
    const disease123 = ['==', ['get', 'disease'], 'Lead poisoning'];
    const disease124 = ['==', ['get', 'disease'], 'lactose intolerance'];
    const disease125 = ['==', ['get', 'disease'], 'Measles(Khasra)'];
    const disease126 = ['==', ['get', 'disease'], 'Malaria'];
    const disease127 = ['==', ['get', 'disease'], 'Meningitis'];
    const disease128 = ['==', ['get', 'disease'], 'Migraine'];
    const disease129 = ['==', ['get', 'disease'], 'Myocardial Infarction (Heart Attack)'];
    const disease130 = ['==', ['get', 'disease'], 'Microcephaly'];
    const disease131 = ['==', ['get', 'disease'], "Mooren's Ulcer"];
    const disease132 = ['==', ['get', 'disease'], 'Myopia'];
    const disease133 = ['==', ['get', 'disease'], 'Mastitis'];
    const disease134 = ['==', ['get', 'disease'], 'Mouth Breathing'];
    const disease135 = ['==', ['get', 'disease'], 'Narcolepsy'];
    const disease136 = ['==', ['get', 'disease'], 'Nasal Polyps'];
    const disease137 = ['==', ['get', 'disease'], 'Neonatal Respiratory Disease Syndrome(NRDS)'];
    const disease138 = ['==', ['get', 'disease'], 'Neuralgia'];
    const disease139 = ['==', ['get', 'disease'], 'Nipah virus infection'];
    const disease140 = ['==', ['get', 'disease'], 'Neurotrophic Keratopathy'];
    const disease141 = ['==', ['get', 'disease'], 'Nausea and Vomiting of Pregnancy and Hyperemesis gravidarum'];
    const disease142 = ['==', ['get', 'disease'], 'Obsessive Compulsive Disorder'];
    const disease143 = ['==', ['get', 'disease'], 'Oral Cancer'];
    const disease144 = ['==', ['get', 'disease'], 'Osteomyelitis'];
    const disease145 = ['==', ['get', 'disease'], 'Osteoporosis'];
    const disease146 = ['==', ['get', 'disease'], 'Otitis Media'];
    const disease147 = ['==', ['get', 'disease'], 'Ocular Graft-versus-host Disease'];
    const disease148 = ['==', ['get', 'disease'], 'Obesity'];
    const disease149 = ['==', ['get', 'disease'], 'Orbital Varix'];
    const disease150 = ['==', ['get', 'disease'], 'Orbital Cavernous Haemangioma'];
    const disease151 = ['==', ['get', 'disease'], 'Orbital Solitary Fibrous Tumour'];
    const disease152 = ['==', ['get', 'disease'], 'Orbital Haemangiopericytoma'];
    const disease153 = ['==', ['get', 'disease'], 'Orbital Lymphangioma'];
    const disease154 = ['==', ['get', 'disease'], "Parkinson's Disease"];
    const disease155 = ['==', ['get', 'disease'], 'Pericarditis'];
    const disease156 = ['==', ['get', 'disease'], 'Pneumonia'];
    const disease157 = ['==', ['get', 'disease'], 'Poliomyelitis'];
    const disease158 = ['==', ['get', 'disease'], 'Polycystic ovary syndrome (PCOS)'];
    const disease159 = ['==', ['get', 'disease'], 'Phlyctenular Keratoconjunctivitis'];
    const disease160 = ['==', ['get', 'disease'], 'Plague'];
    const disease161 = ['==', ['get', 'disease'], 'Pinguecula'];
    const disease162 = ['==', ['get', 'disease'], 'Preterm birth'];
    const disease163 = ['==', ['get', 'disease'], 'Preeclampsia'];
    const disease164 = ['==', ['get', 'disease'], 'Pellucid Marginal Degeneration'];
    const disease165 = ['==', ['get', 'disease'], 'Presbyopia'];
    const disease166 = ['==', ['get', 'disease'], 'Premenstrual syndrome'];
    const disease167 = ['==', ['get', 'disease'], 'Pseudophakia'];
    const disease168 = ['==', ['get', 'disease'], 'Puerperal sepsis'];
    const disease169 = ['==', ['get', 'disease'], 'Postpartum haemorrhage'];
    const disease170 = ['==', ['get', 'disease'], 'Photophthalmia'];
    const disease171 = ['==', ['get', 'disease'], 'Post-herpetic neuralgia'];
    const disease172 = ['==', ['get', 'disease'], 'Postpartum depression/ Perinatal depression'];
    const disease173 = ['==', ['get', 'disease'], 'Q Fever'];
    const disease174 = ['==', ['get', 'disease'], 'Quinsy'];
    const disease175 = ['==', ['get', 'disease'], 'Rabies'];
    const disease176 = ['==', ['get', 'disease'], "Raynaud's Phenomenon"];
    const disease177 = ['==', ['get', 'disease'], 'Rubella'];
    const disease178 = ['==', ['get', 'disease'], 'Recurrent Corneal Erosion Syndrome'];
    const disease179 = ['==', ['get', 'disease'], 'Rheumatic fever and rheumatic heart disease'];
    const disease180 = ['==', ['get', 'disease'], 'Ramsay-Hunt Syndrome'];
    const disease181 = ['==', ['get', 'disease'], 'Sarcoidosis'];
    const disease182 = ['==', ['get', 'disease'], 'Sarcoma'];
    const disease183 = ['==', ['get', 'disease'], 'Severe Acute Respiratory Syndrome (SARS)'];
    const disease184 = ['==', ['get', 'disease'], 'Swine Flu'];
    const disease185 = ['==', ['get', 'disease'], 'Syphilis'];
    const disease186 = ['==', ['get', 'disease'], 'Superior Limbic Keratoconjunctivitis'];
    const disease187 = ['==', ['get', 'disease'], 'Stroke'];
    const disease188 = ['==', ['get', 'disease'], 'Sexually transmitted infections (STIs)'];
    const disease189 = ['==', ['get', 'disease'], 'Spheroidal Degeneration'];
    const disease190 = ['==', ['get', 'disease'], "Salzmann's Nodular Degeneration"];
    const disease191 = ['==', ['get', 'disease'], 'Substance abuse'];
    const disease192 = ['==', ['get', 'disease'], 'Scabies'];
    const disease193 = ['==', ['get', 'disease'], 'Solar Retinopathy'];
    const disease194 = ['==', ['get', 'disease'], 'Silicosis'];
    const disease195 = ['==', ['get', 'disease'], 'Siderosis Bulbi'];
    const disease196 = ['==', ['get', 'disease'], 'Tetanus'];
    const disease197 = ['==', ['get', 'disease'], 'Thalassaemia'];
    const disease198 = ['==', ['get', 'disease'], 'Tuberculosis'];
    const disease199 = ['==', ['get', 'disease'], 'Turners Syndrome'];
    const disease200 = ['==', ['get', 'disease'], 'Toxic Keratoconjunctivitis'];
    const disease201 = ['==', ['get', 'disease'], 'Thermal Injuries to the Eye'];
    const disease202 = ['==', ['get', 'disease'], "Terrien's Marginal Degeneration"];
    const disease203 = ['==', ['get', 'disease'], 'Typhoid / Enteric Fever'];
    const disease204 = ['==', ['get', 'disease'], 'Traumatic Hyphaema'];
    const disease205 = ['==', ['get', 'disease'], 'Trochlear Nerve Palsy'];
    const disease206 = ['==', ['get', 'disease'], 'Ulcerative Colitis'];
    const disease207 = ['==', ['get', 'disease'], 'Urticaria'];
    const disease208 = ['==', ['get', 'disease'], 'Varicose Veins'];
    const disease209 = ['==', ['get', 'disease'], 'Vitamin B12 Deficiency'];
    const disease210 = ['==', ['get', 'disease'], 'Whooping Cough/Pertussis'];
    const disease211 = ['==', ['get', 'disease'], 'Welding-arc Maculopathy'];
    const disease212 = ['==', ['get', 'disease'], 'Xerophthalmia'];
    const disease213 = ['==', ['get', 'disease'], 'Yellow Fever'];
    const disease214 = ['==', ['get', 'disease'], 'Abdominal aortic aneurysm'];
    const disease215 = ['==', ['get', 'disease'], 'Abscess'];
    const disease216 = ['==', ['get', 'disease'], 'Achalasia'];
    const disease217 = ['==', ['get', 'disease'], 'Reflux in babies'];
    const disease218 = ['==', ['get', 'disease'], 'Acne'];
    const disease219 = ['==', ['get', 'disease'], 'Acoustic neuroma (vestibular schwannoma)'];
    const disease220 = ['==', ['get', 'disease'], 'Acromegaly'];
    const disease221 = ['==', ['get', 'disease'], 'Actinic keratoses (solar keratoses)'];
    const disease222 = ['==', ['get', 'disease'], 'Acute cholecystitis'];
    const disease223 = ['==', ['get', 'disease'], 'Acute kidney injury'];
    const disease224 = ['==', ['get', 'disease'], 'Acute myeloid leukaemia'];
    const disease225 = ['==', ['get', 'disease'], 'Acute pancreatitis'];
    const disease226 = ['==', ['get', 'disease'], 'Acute respiratory distress syndrome'];
    const disease227 = ['==', ['get', 'disease'], "Addison's disease"];
    const disease228 = ['==', ['get', 'disease'], 'Air or gas embolism'];
    const disease229 = ['==', ['get', 'disease'], 'Albinism'];
    const disease230 = ['==', ['get', 'disease'], 'Alcohol-related liver disease'];
    const disease231 = ['==', ['get', 'disease'], 'Altitude sickness'];
    const disease232 = ['==', ['get', 'disease'], 'Amyloidosis'];
    const disease233 = ['==', ['get', 'disease'], 'Iron deficiency anaemia'];
    const disease234 = ['==', ['get', 'disease'], 'Vitamin B12 or folate deficiency anaemia'];
    const disease235 = ['==', ['get', 'disease'], 'Anal cancer'];
    const disease236 = ['==', ['get', 'disease'], 'Anal fistula'];
    const disease237 = ['==', ['get', 'disease'], 'Anal pain'];
    const disease238 = ['==', ['get', 'disease'], 'Anaphylaxis'];
    const disease239 = ['==', ['get', 'disease'], 'Brain aneurysm'];
    const disease240 = ['==', ['get', 'disease'], 'Angina'];
    const disease241 = ['==', ['get', 'disease'], 'Angioedema'];
    const disease242 = ['==', ['get', 'disease'], 'Ankylosing spondylitis'];
    const disease243 = ['==', ['get', 'disease'], 'Generalised anxiety disorder in adults'];
    const disease244 = ['==', ['get', 'disease'], 'Anxiety disorders in children'];
    const disease245 = ['==', ['get', 'disease'], 'Aphasia'];
    const disease246 = ['==', ['get', 'disease'], 'Arterial thrombosis'];
    const disease247 = ['==', ['get', 'disease'], 'Auditory processing disorder'];
    const disease248 = ['==', ['get', 'disease'], 'Balanitis'];
    const disease249 = ['==', ['get', 'disease'], "Behçet's disease"];
    const disease250 = ['==', ['get', 'disease'], 'Benign prostate enlargement'];
    const disease251 = ['==', ['get', 'disease'], 'Bile duct cancer (cholangiocarcinoma)'];
    const disease252 = ['==', ['get', 'disease'], 'Binge eating disorder'];
    const disease253 = ['==', ['get', 'disease'], 'Bipolar disorder'];
    const disease254 = ['==', ['get', 'disease'], 'Blepharitis'];
    const disease255 = ['==', ['get', 'disease'], 'Body dysmorphic disorder (BDD)'];
    const disease256 = ['==', ['get', 'disease'], 'Boils and carbuncles'];
    const disease257 = ['==', ['get', 'disease'], 'Borderline personality disorder'];
    const disease258 = ['==', ['get', 'disease'], 'Bornholm disease'];
    const disease259 = ['==', ['get', 'disease'], 'Botulism'];
    const disease260 = ['==', ['get', 'disease'], 'Bowel cancer'];
    const disease261 = ['==', ['get', 'disease'], 'Bowel polyps'];
    const disease262 = ['==', ['get', 'disease'], 'Brain abscess'];
    const disease263 = ['==', ['get', 'disease'], 'Subarachnoid haemorrhage'];
    const disease264 = ['==', ['get', 'disease'], 'Malignant brain tumour (brain cancer)'];
    const disease265 = ['==', ['get', 'disease'], 'Breast cancer in men'];
    const disease266 = ['==', ['get', 'disease'], 'Breast cancer in women'];
    const disease267 = ['==', ['get', 'disease'], 'Breast pain'];
    const disease268 = ['==', ['get', 'disease'], 'Broken arm or wrist'];
    const disease269 = ['==', ['get', 'disease'], 'Broken nose'];
    const disease270 = ['==', ['get', 'disease'], 'Broken or bruised ribs'];
    const disease271 = ['==', ['get', 'disease'], 'Brugada syndrome'];
    const disease272 = ['==', ['get', 'disease'], 'Teeth grinding (bruxism)'];
    const disease273 = ['==', ['get', 'disease'], 'Bulimia'];
    const disease274 = ['==', ['get', 'disease'], 'Carbon monoxide poisoning'];
    const disease275 = ['==', ['get', 'disease'], 'Cartilage damage'];
    const disease276 = ['==', ['get', 'disease'], 'Catarrh'];
    const disease277 = ['==', ['get', 'disease'], 'Cavernoma'];
    const disease278 = ['==', ['get', 'disease'], 'Cerebral palsy'];
    const disease279 = ['==', ['get', 'disease'], 'Cervical rib'];
    const disease280 = ['==', ['get', 'disease'], 'Cervical spondylosis'];
    const disease281 = ['==', ['get', 'disease'], 'Chlamydia'];
    const disease282 = ['==', ['get', 'disease'], 'Cholesteatoma'];
    const disease283 = ['==', ['get', 'disease'], 'Chronic fatigue syndrome (CFS/ME)'];
    const disease284 = ['==', ['get', 'disease'], 'Chronic kidney disease'];
    const disease285 = ['==', ['get', 'disease'], 'Chronic lymphocytic leukaemia'];
    const disease286 = ['==', ['get', 'disease'], 'Chronic myeloid leukaemia'];
    const disease287 = ['==', ['get', 'disease'], 'Chronic traumatic encephalopathy'];
    const disease288 = ['==', ['get', 'disease'], 'Cirrhosis'];
    const disease289 = ['==', ['get', 'disease'], 'Creutzfeldt-Jakob disease'];
    const disease290 = ['==', ['get', 'disease'], 'Clostridium difficile'];
    const disease291 = ['==', ['get', 'disease'], 'Cluster headaches'];
    const disease292 = ['==', ['get', 'disease'], 'Coccydynia (tailbone pain)'];
    const disease293 = ['==', ['get', 'disease'], 'Coeliac disease'];
    const disease294 = ['==', ['get', 'disease'], 'Concussion'];
    const disease295 = ['==', ['get', 'disease'], 'Coronary heart disease'];
    const disease296 = ['==', ['get', 'disease'], 'Corticobasal degeneration'];
    const disease297 = ['==', ['get', 'disease'], "Crohn's disease"];
    const disease298 = ['==', ['get', 'disease'], 'Cyclical vomiting syndrome'];
    const disease299 = ['==', ['get', 'disease'], 'Cystic fibrosis'];
    const disease300 = ['==', ['get', 'disease'], 'Deep vein thrombosis'];
    const disease301 = ['==', ['get', 'disease'], 'Dehydration'];
    const disease302 = ['==', ['get', 'disease'], 'Frontotemporal dementia'];
    const disease303 = ['==', ['get', 'disease'], 'Vascular dementia'];
    const disease304 = ['==', ['get', 'disease'], 'Dementia with Lewy bodies'];
    const disease305 = ['==', ['get', 'disease'], 'Dengue'];
    const disease306 = ['==', ['get', 'disease'], 'Dental abscess'];
    const disease307 = ['==', ['get', 'disease'], 'Diabetic ketoacidosis'];
    const disease308 = ['==', ['get', 'disease'], 'DiGeorge syndrome (22q11 deletion)'];
    const disease309 = ['==', ['get', 'disease'], 'Discoid eczema'];
    const disease310 = ['==', ['get', 'disease'], 'Dislocated kneecap'];
    const disease311 = ['==', ['get', 'disease'], 'Dissociative disorders'];
    const disease312 = ['==', ['get', 'disease'], 'Diverticular disease and diverticulitis'];
    const disease313 = ['==', ['get', 'disease'], 'Dysarthria (difficulty speaking)'];
    const disease314 = ['==', ['get', 'disease'], 'Dyspraxia (developmental co-ordination disorder) in adults'];
    const disease315 = ['==', ['get', 'disease'], 'Dystonia'];
    const disease316 = ['==', ['get', 'disease'], 'Perforated eardrum'];
    const disease317 = ['==', ['get', 'disease'], 'Ebola virus disease'];
    const disease318 = ['==', ['get', 'disease'], 'Varicose eczema'];
    const disease319 = ['==', ['get', 'disease'], 'Ehlers-Danlos syndromes'];
    const disease320 = ['==', ['get', 'disease'], 'Embolism'];
    const disease321 = ['==', ['get', 'disease'], 'Encephalitis'];
    const disease322 = ['==', ['get', 'disease'], 'Endocarditis'];
    const disease323 = ['==', ['get', 'disease'], 'Epidermolysis bullosa'];
    const disease324 = ['==', ['get', 'disease'], 'Epididymitis'];
    const disease325 = ['==', ['get', 'disease'], 'Epiglottitis'];
    const disease326 = ['==', ['get', 'disease'], 'Erythema multiforme'];
    const disease327 = ['==', ['get', 'disease'], 'Erythromelalgia'];
    const disease328 = ['==', ['get', 'disease'], 'Ewing sarcoma'];
    const disease329 = ['==', ['get', 'disease'], 'Eye cancer'];
    const disease330 = ['==', ['get', 'disease'], 'Herpes simplex eye infections'];
    const disease331 = ['==', ['get', 'disease'], 'Foetal alcohol syndrome'];
    const disease332 = ['==', ['get', 'disease'], 'Food poisoning'];
    const disease333 = ['==', ['get', 'disease'], 'Gallbladder cancer'];
    const disease334 = ['==', ['get', 'disease'], 'Gallstones'];
    const disease335 = ['==', ['get', 'disease'], 'Gastritis'];
    const disease336 = ['==', ['get', 'disease'], 'Gastroparesis'];
    const disease337 = ['==', ['get', 'disease'], "Gilbert's syndrome"];
    const disease338 = ['==', ['get', 'disease'], 'Glaucoma'];
    const disease339 = ['==', ['get', 'disease'], 'Glomerulonephritis'];
    const disease340 = ['==', ['get', 'disease'], "Granulomatosis with polyangiitis (Wegener's granulomatosis)"];
    const disease341 = ['==', ['get', 'disease'], 'Guillain-Barré syndrome'];
    const disease342 = ['==', ['get', 'disease'], 'Haemochromatosis'];
    const disease343 = ['==', ['get', 'disease'], 'Hairy cell leukaemia'];
    const disease344 = ['==', ['get', 'disease'], 'Hay fever'];
    const disease345 = ['==', ['get', 'disease'], 'Head and neck cancer'];
    const disease346 = ['==', ['get', 'disease'], 'Heart attack'];
    const disease347 = ['==', ['get', 'disease'], 'Heart block'];
    const disease348 = ['==', ['get', 'disease'], 'Heart failure'];
    const disease349 = ['==', ['get', 'disease'], 'Mitral valve problems'];
    const disease350 = ['==', ['get', 'disease'], 'Hepatitis A'];
    const disease351 = ['==', ['get', 'disease'], 'Hepatitis B'];
    const disease352 = ['==', ['get', 'disease'], 'Hepatitis C'];
    const disease353 = ['==', ['get', 'disease'], 'Hereditary haemorrhagic telangiectasia (HHT)'];
    const disease354 = ['==', ['get', 'disease'], 'Hereditary neuropathy with pressure palsies (HNPP)'];
    const disease355 = ['==', ['get', 'disease'], 'Hereditary spastic paraplegia'];
    const disease356 = ['==', ['get', 'disease'], 'Hidradenitis suppurativa (HS)'];
    const disease357 = ['==', ['get', 'disease'], 'Hip fracture'];
    const disease358 = ['==', ['get', 'disease'], "Hirschsprung's disease"];
    const disease359 = ['==', ['get', 'disease'], 'HIV and AIDS'];
    const disease360 = ['==', ['get', 'disease'], "Huntington's disease"];
    const disease361 = ['==', ['get', 'disease'], 'Hydrocephalus'];
    const disease362 = ['==', ['get', 'disease'], 'Hyperparathyroidism'];
    const disease363 = ['==', ['get', 'disease'], 'Low blood sugar (hypoglycaemia)'];
    const disease364 = ['==', ['get', 'disease'], 'Hypoparathyroidism'];
    const disease365 = ['==', ['get', 'disease'], 'Hypothermia'];
    const disease366 = ['==', ['get', 'disease'], 'Underactive thyroid (hypothyroidism)'];
    const disease367 = ['==', ['get', 'disease'], 'Idiopathic pulmonary fibrosis'];
    const disease368 = ['==', ['get', 'disease'], 'Inflammatory bowel disease'];
    const disease369 = ['==', ['get', 'disease'], 'Interstitial cystitis'];
    const disease370 = ['==', ['get', 'disease'], 'Intracranial hypertension'];
    const disease371 = ['==', ['get', 'disease'], 'Japanese encephalitis'];
    const disease372 = ['==', ['get', 'disease'], 'Kidney cancer'];
    const disease373 = ['==', ['get', 'disease'], 'Kidney infection'];
    const disease374 = ['==', ['get', 'disease'], 'Kidney stones'];
    const disease375 = ['==', ['get', 'disease'], 'Klinefelter syndrome'];
    const disease376 = ['==', ['get', 'disease'], 'Kwashiorkor'];
    const disease377 = ['==', ['get', 'disease'], 'Labyrinthitis'];
    const disease378 = ['==', ['get', 'disease'], 'Lactose intolerance'];
    const disease379 = ['==', ['get', 'disease'], 'Lambert-Eaton myasthenic syndrome'];
    const disease380 = ['==', ['get', 'disease'], 'Laryngeal (larynx) cancer'];
    const disease381 = ['==', ['get', 'disease'], 'Lipoedema'];
    const disease382 = ['==', ['get', 'disease'], 'Liver cancer'];
    const disease383 = ['==', ['get', 'disease'], 'Long QT syndrome'];
    const disease384 = ['==', ['get', 'disease'], 'Long-sightedness'];
    const disease385 = ['==', ['get', 'disease'], 'Lyme disease'];
    const disease386 = ['==', ['get', 'disease'], 'Mastoiditis'];
    const disease387 = ['==', ['get', 'disease'], 'Measles'];
    const disease388 = ['==', ['get', 'disease'], 'Menopause'];
    const disease389 = ['==', ['get', 'disease'], 'Mesothelioma'];
    const disease390 = ['==', ['get', 'disease'], 'Metabolic syndrome'];
    const disease391 = ['==', ['get', 'disease'], 'Molar pregnancy'];
    const disease392 = ['==', ['get', 'disease'], 'Motor neurone disease'];
    const disease393 = ['==', ['get', 'disease'], 'Mouth cancer'];
    const disease394 = ['==', ['get', 'disease'], 'Multiple myeloma'];
    const disease395 = ['==', ['get', 'disease'], 'Multiple sclerosis'];
    const disease396 = ['==', ['get', 'disease'], 'Multiple system atrophy'];
    const disease397 = ['==', ['get', 'disease'], 'Myasthenia gravis'];
    const disease398 = ['==', ['get', 'disease'], "Ménière's disease"];
    const disease399 = ['==', ['get', 'disease'], 'Nail patella syndrome'];
    const disease400 = ['==', ['get', 'disease'], 'Nasal and sinus cancer'];
    const disease401 = ['==', ['get', 'disease'], 'Nasal polyps'];
    const disease402 = ['==', ['get', 'disease'], 'Nasopharyngeal cancer'];
    const disease403 = ['==', ['get', 'disease'], 'Necrotising fasciitis'];
    const disease404 = ['==', ['get', 'disease'], 'Neuroblastoma'];
    const disease405 = ['==', ['get', 'disease'], 'Neuroendocrine tumours and carcinoid syndrome'];
    const disease406 = ['==', ['get', 'disease'], 'Neurofibromatosis type 1'];
    const disease407 = ['==', ['get', 'disease'], 'Neurofibromatosis type 2'];
    const disease408 = ['==', ['get', 'disease'], 'Neuromyelitis optica'];
    const disease409 = ['==', ['get', 'disease'], 'Non-gonococcal urethritis'];
    const disease410 = ['==', ['get', 'disease'], 'Obsessive compulsive disorder (OCD)'];
    const disease411 = ['==', ['get', 'disease'], 'Oesophageal cancer'];
    const disease412 = ['==', ['get', 'disease'], 'Otosclerosis'];
    const disease413 = ['==', ['get', 'disease'], 'Ovarian cancer'];
    const disease414 = ['==', ['get', 'disease'], 'Overactive thyroid (hyperthyroidism)'];
    const disease415 = ['==', ['get', 'disease'], "Paget's disease of bone"];
    const disease416 = ['==', ['get', 'disease'], 'Pancreatic cancer'];
    const disease417 = ['==', ['get', 'disease'], 'Panic disorder'];
    const disease418 = ['==', ['get', 'disease'], 'Paralysis'];
    const disease419 = ['==', ['get', 'disease'], "Parkinson's disease"];
    const disease420 = ['==', ['get', 'disease'], "Patau's syndrome"];
    const disease421 = ['==', ['get', 'disease'], 'Pelvic inflammatory disease'];
    const disease422 = ['==', ['get', 'disease'], 'Pelvic organ prolapse'];
    const disease423 = ['==', ['get', 'disease'], 'Penile cancer'];
    const disease424 = ['==', ['get', 'disease'], 'Peripheral arterial disease (PAD)'];
    const disease425 = ['==', ['get', 'disease'], 'Phlebitis (superficial thrombophlebitis)'];
    const disease426 = ['==', ['get', 'disease'], 'Phobias'];
    const disease427 = ['==', ['get', 'disease'], 'Piles (haemorrhoids)'];
    const disease428 = ['==', ['get', 'disease'], 'Polio'];
    const disease429 = ['==', ['get', 'disease'], 'Polycythaemia'];
    const disease430 = ['==', ['get', 'disease'], 'Polymorphic light eruption'];
    const disease431 = ['==', ['get', 'disease'], 'Polymyalgia rheumatica'];
    const disease432 = ['==', ['get', 'disease'], 'Post-polio syndrome'];
    const disease433 = ['==', ['get', 'disease'], 'Postnatal depression'];
    const disease434 = ['==', ['get', 'disease'], 'Postpartum psychosis'];
    const disease435 = ['==', ['get', 'disease'], 'Prader-Willi syndrome'];
    const disease436 = ['==', ['get', 'disease'], 'Pre-eclampsia'];
    const disease437 = ['==', ['get', 'disease'], 'Pressure ulcers (pressure sores)'];
    const disease438 = ['==', ['get', 'disease'], 'Primary biliary cholangitis (primary biliary cirrhosis)'];
    const disease439 = ['==', ['get', 'disease'], 'Prostate cancer'];
    const disease440 = ['==', ['get', 'disease'], 'Prostatitis'];
    const disease441 = ['==', ['get', 'disease'], 'Psychosis'];
    const disease442 = ['==', ['get', 'disease'], 'Pubic lice'];
    const disease443 = ['==', ['get', 'disease'], 'Pudendal neuralgia'];
    const disease444 = ['==', ['get', 'disease'], 'Pulmonary hypertension'];
    const disease445 = ['==', ['get', 'disease'], 'Q fever'];
    const disease446 = ['==', ['get', 'disease'], 'Reactive arthritis'];
    const disease447 = ['==', ['get', 'disease'], 'Repetitive strain injury (RSI)'];
    const disease448 = ['==', ['get', 'disease'], 'Respiratory tract infections (RTIs)'];
    const disease449 = ['==', ['get', 'disease'], 'Retinal migraine'];
    const disease450 = ['==', ['get', 'disease'], 'Rett syndrome'];
    const disease451 = ['==', ['get', 'disease'], "Reye's syndrome"];
    const disease452 = ['==', ['get', 'disease'], 'Rosacea'];
    const disease453 = ['==', ['get', 'disease'], 'Roseola'];
    const disease454 = ['==', ['get', 'disease'], 'Schizophrenia'];
    const disease455 = ['==', ['get', 'disease'], 'Scoliosis'];
    const disease456 = ['==', ['get', 'disease'], 'Seasonal affective disorder (SAD)'];
    const disease457 = ['==', ['get', 'disease'], 'Shin splints'];
    const disease458 = ['==', ['get', 'disease'], 'Shoulder impingement'];
    const disease459 = ['==', ['get', 'disease'], 'Sick building syndrome'];
    const disease460 = ['==', ['get', 'disease'], 'Sickle cell disease'];
    const disease461 = ['==', ['get', 'disease'], 'Sinusitis (sinus infection)'];
    const disease462 = ['==', ['get', 'disease'], "Sjogren's syndrome"];
    const disease463 = ['==', ['get', 'disease'], 'Slapped cheek syndrome'];
    const disease464 = ['==', ['get', 'disease'], 'Sleep apnoea'];
    const disease465 = ['==', ['get', 'disease'], 'Sleep paralysis'];
    const disease466 = ['==', ['get', 'disease'], 'Social anxiety (social phobia)'];
    const disease467 = ['==', ['get', 'disease'], 'Soft tissue sarcomas'];
    const disease468 = ['==', ['get', 'disease'], 'Spinal muscular atrophy'];
    const disease469 = ['==', ['get', 'disease'], 'Spondylolisthesis'];
    const disease470 = ['==', ['get', 'disease'], 'Stevens-Johnson syndrome'];
    const disease471 = ['==', ['get', 'disease'], 'Tapeworms'];
    const disease472 = ['==', ['get', 'disease'], 'Tay-Sachs disease'];
    const disease473 = ['==', ['get', 'disease'], 'Temporal arteritis'];
    const disease474 = ['==', ['get', 'disease'], 'Excessive thirst'];
    const disease475 = ['==', ['get', 'disease'], 'Thyroid cancer'];
    const disease476 = ['==', ['get', 'disease'], 'Transient ischaemic attack (TIA)'];
    const disease477 = ['==', ['get', 'disease'], 'Tooth decay'];
    const disease478 = ['==', ['get', 'disease'], "Tourette's syndrome"];
    const disease479 = ['==', ['get', 'disease'], 'Toxic shock syndrome'];
    const disease480 = ['==', ['get', 'disease'], 'Transurethral resection of the prostate (TURP)'];
    const disease481 = ['==', ['get', 'disease'], 'Trichomoniasis'];
    const disease482 = ['==', ['get', 'disease'], 'Trichotillomania (hair pulling disorder)'];
    const disease483 = ['==', ['get', 'disease'], "Trimethylaminuria ('fish odour syndrome')"];
    const disease484 = ['==', ['get', 'disease'], 'Tuberculosis (TB)'];
    const disease485 = ['==', ['get', 'disease'], 'Ulcerative colitis'];
    const disease486 = ['==', ['get', 'disease'], 'Urinary tract infections (UTIs)'];
    const disease487 = ['==', ['get', 'disease'], 'Uveitis'];
    const disease488 = ['==', ['get', 'disease'], 'Vaginal cancer'];
    const disease489 = ['==', ['get', 'disease'], 'Vaginal dryness'];
    const disease490 = ['==', ['get', 'disease'], 'Vulvodynia (vulval pain)'];
    const disease491 = ['==', ['get', 'disease'], 'Vaginitis'];
    const disease492 = ['==', ['get', 'disease'], 'Vitiligo'];
    const disease493 = ['==', ['get', 'disease'], 'Von Willebrand disease'];
    const disease494 = ['==', ['get', 'disease'], 'Vulval cancer'];
    const disease495 = ['==', ['get', 'disease'], 'Whiplash'];
    const disease496 = ['==', ['get', 'disease'], 'Whooping cough'];
    const disease497 = ['==', ['get', 'disease'], 'Zika virus'];
    

    // using d3 to create a consistent color scale
    const colorScale = d3.scaleOrdinal()
      .domain(["malaria", "dengue", "angioedema", "asthma"])
      .range(colors)
      
      map.on('load', () => {
        // add a clustered GeoJSON source for powerplant
        map.addSource('diseases', {
          'type': 'geojson',
          'data': jsondata,
          'cluster': true,
          'clusterRadius': 100,
          'clusterProperties': { // keep separate counts for each disease in a cluster
            'malaria': ['+', ['case', malaria, 1, 0]],
            'dengue': ['+', ['case', dengue, 1, 0]],
            'angioedema': ['+', ['case', angioedema, 1, 0]],
            'asthma': ['+', ['case', asthma, 1, 0]]
          }
        });
      
        map.addLayer({
          'id': 'disease_individual',
          'type': 'circle',
          'source': 'diseases',
          'filter': ['!=', ['get', 'cluster'], true],
          'paint': {
            'circle-color': ['case',
              malaria, colorScale('malaria'),
              dengue, colorScale('dengue'),
              angioedema, colorScale('angioedema'),
              asthma, colorScale('asthma'), '#ffed6f'],
            'circle-radius': 5
          }
        });
      
          map.addLayer({
            'id': 'disease_individual_outer',
            'type': 'circle',
            'source': 'diseases',
            'filter': ['!=', ['get', 'cluster'], true],
            'paint': {
              'circle-stroke-color': ['case',
              malaria, colorScale('malaria'),
              dengue, colorScale('dengue'),
              angioedema, colorScale('angioedema'),
              asthma, colorScale('asthma'), '#ffed6f'],
              'circle-stroke-width': 2,
              'circle-radius': 10,
              'circle-color': "rgba(0, 0, 0, 0)"
            }
          });
      
      
      
          let markers = {};
          let markersOnScreen = {};
          let point_counts = [];
          let totals;
      
          const getPointCount = (features) => {
            features.forEach(f => {
              if (f.properties.cluster) {
                point_counts.push(f.properties.point_count)
              }
            })
      
            return point_counts;
          };
      
          const updateMarkers = () => {
            document.getElementById('key').innerHTML = '';
            let newMarkers = {};
            const features = map.querySourceFeatures('diseases');
            totals = getPointCount(features);
            var id;
            features.forEach((feature) => {
              const coordinates = feature.geometry.coordinates;
              const props = feature.properties;
      
              if (!props.cluster) {
                return;
              };
      
      
              var id = props.cluster_id;
      
              let marker = markers[id];
              if (!marker) {
                const el = createDonutChart(props, totals);
                marker = markers[id] = new mapboxgl.Marker({
                  element: el
                })
                .setLngLat(coordinates)
              }
      
              newMarkers[id] = marker;
      
              if (!markersOnScreen[id]) {
                marker.addTo(map);
              }
            });
      
            for (id in markersOnScreen) {
              if (!newMarkers[id]) {
                markersOnScreen[id].remove();
              }
            }
              markersOnScreen = newMarkers;
          };
      
          const createDonutChart = (props, totals) => {
            const div = document.createElement('div');
            const data = [
              {type: 'malaria', count: props.malaria},
              {type: 'dengue', count: props.dengue},
              {type: 'asthma', count: props.asthma},
              {type: 'angioedema', count: props.angioedema},
            ];
      
            const thickness = 10;
            const scale = d3.scaleLinear()
              .domain([d3.min(totals), d3.max(totals)])
              .range([500, d3.max(totals)])
      
            const radius = Math.sqrt(scale(props.point_count));
            const circleRadius = radius - thickness;
      
            const svg = d3.select(div)
              .append('svg')
              .attr('class', 'pie')
              .attr('width', radius * 2)
              .attr('height', radius * 2);
      
            //center
            const g = svg.append('g')
              .attr('transform', `translate(${radius}, ${radius})`);
      
            const arc = d3.arc()
              .innerRadius(radius - thickness)
              .outerRadius(radius);
      
            const pie = d3.pie()
              .value(d => d.count)
              .sort(null);
      
            const path = g.selectAll('path')
              .data(pie(data.sort((x, y) => d3.ascending(y.count, x.count))))
              .enter()
              .append('path')
              .attr('d', arc)
              .attr('fill', (d) => colorScale(d.data.type))
      
            const circle = g.append('circle')
              .attr('r', circleRadius)
              .attr('fill', 'rgba(0, 0, 0, 0.7)')
              .attr('class', 'center-circle')
      
            const text = g
              .append("text")
              .attr("class", "total")
              .text(props.point_count_abbreviated)
              .attr('text-anchor', 'middle')
              .attr('dy', 5)
              .attr('fill', 'white')
      
              const infoEl = createTable(props);
      
              svg.on('click', () => {
                d3.selectAll('.center-circle').attr('fill', 'rgba(0, 0, 0, 0.7)')
                circle.attr('fill', 'rgb(71, 79, 102)')
                document.getElementById('key').innerHTML = '';
                document.getElementById('key').append(infoEl);
              })
      
            return div;
          }
      
          const createTable = (props) => {
            const getPerc = (count) => {
              return count/props.point_count;
            };
      
            const data = [
              {type: 'malaria', perc: getPerc(props.malaria)},
              {type: 'dengue', perc: getPerc(props.dengue)},
              {type: 'asthma', perc: getPerc(props.asthma)},
              {type: 'angioedema', perc: getPerc(props.angioedema)},
            ];
      
            const columns = ['type', 'perc']
            const div = document.createElement('div');
            const table = d3.select(div).append('table').attr('class', 'table')
            const thead = table.append('thead')
            const	tbody = table.append('tbody');
      
            thead.append('tr')
              .selectAll('th')
              .data(columns).enter()
              .append('th')
              .text((d) => {
                let colName = d === 'perc' ? '%' : 'Disease Type'
                return colName;
              })
      
            const rows = tbody.selectAll('tr')
              .data(data.filter(i => i.perc).sort((x, y) => d3.descending(x.perc, y.perc)))
              .enter()
              .append('tr')
              .style('border-left', (d) => `20px solid ${colorScale(d.type)}`);
      
            // create a cell in each row for each column
            const cells = rows.selectAll('td')
              .data((row) => {
                return columns.map((column) => {
                  let val = column === 'perc' ? d3.format(".2%")(row[column]) : row[column];
                  return {column: column, value: val};
                });
              })
              .enter()
              .append('td')
              .text((d) => d.value)
              .style('text-transform', 'capitalize')
      
            return div;
          }
      
          map.on('data', (e) => {
            if (e.sourceId !== 'diseases' || !e.isSourceLoaded) return;
      
            map.on('move', updateMarkers);
            map.on('moveend', updateMarkers);
            updateMarkers();
          });


          map.on("click", "disease_individual", function(e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            //var mag = e.features[0].properties.mag;
            var tsunami;
    
            if (diseases.hasOwnProperty(e.features[0].properties.disease)) {
              tsunami = e.features[0].properties.disease;
            } else{
              tsunami = "Disease Not found!";
            } 
    
            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
              coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
    
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML("Disease Predictor : <br>disease name: " + tsunami)
              .addTo(map);
          });


      });
  }

  render() {
    return (
      <div className="map">
        <div ref={el => (this.mapContainer = el)} />
        <div id="key"></div>
      </div>
    );
  }
}

export { Map };
