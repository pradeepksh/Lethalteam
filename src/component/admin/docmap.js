import React from "react";
import mapboxgl from "mapbox-gl";
import $ from "jquery";
import diseases from "../main/details.json";
import * as d3 from "d3";
var jsondata;
    
class DocMap extends React.Component {
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
    const disease_arr=[];
    $.ajax({
        type: "GET",
        url: "https://api.jsonbin.io/b/5e9011ae8e85c84370139b7e",
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
                disease_arr.push(f.properties.disease)
            console.log(f.properties.disease);
            }
        })
        afterAjax();
        },error: function(data){
        alert("Unable to add");
    }
    });
    
    function afterAjax() {
    
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        const disease_array=disease_arr.filter(onlyUnique);
        console.log(disease_array);    
    var c = [];
    while (c.length < disease_array.length) {
        do {
            var color = Math.floor((Math.random()*1000000)+1);
        } while (c.indexOf(color) >= 0);
        c.push("#" + ("000000" + color.toString(16)).slice(-6));
    }
    console.log(c);
    /*
    var i;
    for (i = 1; i <= disease_array.length; i++) {
        eval( 'const disease'+i+' = ["==", ["get", "disease"], "'+disease_array[i-1]+'"];' );
    }
    */
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
    //const colors = ['#8dd3c7','#ffffb3','#bebada','#fb8072'];
    const colors = c;
    // using d3 to create a consistent color scale
    const colorScale = d3.scaleOrdinal()
      .domain(disease_array)
      .range(colors)
      
      map.on('load', () => {
        // add a clustered GeoJSON source for powerplant
        
        //eval("map.addSource('diseases', {'type': 'geojson','data': jsondata,'cluster': true,'clusterRadius': 100,'clusterProperties': {"+function x(){for(i = 1; i <= disease_array.length; i++){eval( 'disease'+i+' : ["+", ["case", disease'+i+',1,0]],' );}}+"}});")
        map.addSource('diseases', {
          'type': 'geojson',
          'data': jsondata,
          'cluster': true,
          'clusterRadius': 100,
          'clusterProperties': { // keep separate counts for each disease in a cluster
            disease1 : ["+", ["case", disease1, 1, 0]],
            disease2 : ["+", ["case", disease2, 1, 0]],
            disease3 : ["+", ["case", disease3, 1, 0]],
            disease4 : ["+", ["case", disease4, 1, 0]],
            disease5 : ["+", ["case", disease5, 1, 0]],
            disease6 : ["+", ["case", disease6, 1, 0]],
            disease7 : ["+", ["case", disease7, 1, 0]],
            disease8 : ["+", ["case", disease8, 1, 0]],
            disease9 : ["+", ["case", disease9, 1, 0]],
            disease10 : ["+", ["case", disease10, 1, 0]],
            disease11 : ["+", ["case", disease11, 1, 0]],
            disease12 : ["+", ["case", disease12, 1, 0]],
            disease13 : ["+", ["case", disease13, 1, 0]],
            disease14 : ["+", ["case", disease14, 1, 0]],
            disease15 : ["+", ["case", disease15, 1, 0]],
            disease16 : ["+", ["case", disease16, 1, 0]],
            disease17 : ["+", ["case", disease17, 1, 0]],
            disease18 : ["+", ["case", disease18, 1, 0]],
            disease19 : ["+", ["case", disease19, 1, 0]],
            disease20 : ["+", ["case", disease20, 1, 0]],
            disease21 : ["+", ["case", disease21, 1, 0]],
            disease22 : ["+", ["case", disease22, 1, 0]],
            disease23 : ["+", ["case", disease23, 1, 0]],
            disease24 : ["+", ["case", disease24, 1, 0]],
            disease25 : ["+", ["case", disease25, 1, 0]],
            disease26 : ["+", ["case", disease26, 1, 0]],
            disease27 : ["+", ["case", disease27, 1, 0]],
            disease28 : ["+", ["case", disease28, 1, 0]],
            disease29 : ["+", ["case", disease29, 1, 0]],
            disease30 : ["+", ["case", disease30, 1, 0]],
            disease31 : ["+", ["case", disease31, 1, 0]],
            disease32 : ["+", ["case", disease32, 1, 0]],
            disease33 : ["+", ["case", disease33, 1, 0]],
            disease34 : ["+", ["case", disease34, 1, 0]],
            disease35 : ["+", ["case", disease35, 1, 0]],
            disease36 : ["+", ["case", disease36, 1, 0]],
            disease37 : ["+", ["case", disease37, 1, 0]],
            disease38 : ["+", ["case", disease38, 1, 0]],
            disease39 : ["+", ["case", disease39, 1, 0]],
            disease40 : ["+", ["case", disease40, 1, 0]],
            disease41 : ["+", ["case", disease41, 1, 0]],
            disease42 : ["+", ["case", disease42, 1, 0]],
            disease43 : ["+", ["case", disease43, 1, 0]],
            disease44 : ["+", ["case", disease44, 1, 0]],
            disease45 : ["+", ["case", disease45, 1, 0]],
            disease46 : ["+", ["case", disease46, 1, 0]],
            disease47 : ["+", ["case", disease47, 1, 0]],
            disease48 : ["+", ["case", disease48, 1, 0]],
            disease49 : ["+", ["case", disease49, 1, 0]],
            disease50 : ["+", ["case", disease50, 1, 0]],
            disease51 : ["+", ["case", disease51, 1, 0]],
            disease52 : ["+", ["case", disease52, 1, 0]],
            disease53 : ["+", ["case", disease53, 1, 0]],
            disease54 : ["+", ["case", disease54, 1, 0]],
            disease55 : ["+", ["case", disease55, 1, 0]],
            disease56 : ["+", ["case", disease56, 1, 0]],
            disease57 : ["+", ["case", disease57, 1, 0]],
            disease58 : ["+", ["case", disease58, 1, 0]],
            disease59 : ["+", ["case", disease59, 1, 0]],
            disease60 : ["+", ["case", disease60, 1, 0]],
            disease61 : ["+", ["case", disease61, 1, 0]],
            disease62 : ["+", ["case", disease62, 1, 0]],
            disease63 : ["+", ["case", disease63, 1, 0]],
            disease64 : ["+", ["case", disease64, 1, 0]],
            disease65 : ["+", ["case", disease65, 1, 0]],
            disease66 : ["+", ["case", disease66, 1, 0]],
            disease67 : ["+", ["case", disease67, 1, 0]],
            disease68 : ["+", ["case", disease68, 1, 0]],
            disease69 : ["+", ["case", disease69, 1, 0]],
            disease70 : ["+", ["case", disease70, 1, 0]],
            disease71 : ["+", ["case", disease71, 1, 0]],
            disease72 : ["+", ["case", disease72, 1, 0]],
            disease73 : ["+", ["case", disease73, 1, 0]],
            disease74 : ["+", ["case", disease74, 1, 0]],
            disease75 : ["+", ["case", disease75, 1, 0]],
            disease76 : ["+", ["case", disease76, 1, 0]],
            disease77 : ["+", ["case", disease77, 1, 0]],
            disease78 : ["+", ["case", disease78, 1, 0]],
            disease79 : ["+", ["case", disease79, 1, 0]],
            disease80 : ["+", ["case", disease80, 1, 0]],
            disease81 : ["+", ["case", disease81, 1, 0]],
            disease82 : ["+", ["case", disease82, 1, 0]],
            disease83 : ["+", ["case", disease83, 1, 0]],
            disease84 : ["+", ["case", disease84, 1, 0]],
            disease85 : ["+", ["case", disease85, 1, 0]],
            disease86 : ["+", ["case", disease86, 1, 0]],
            disease87 : ["+", ["case", disease87, 1, 0]],
            disease88 : ["+", ["case", disease88, 1, 0]],
            disease89 : ["+", ["case", disease89, 1, 0]],
            disease90 : ["+", ["case", disease90, 1, 0]],
            disease91 : ["+", ["case", disease91, 1, 0]],
            disease92 : ["+", ["case", disease92, 1, 0]],
            disease93 : ["+", ["case", disease93, 1, 0]],
            disease94 : ["+", ["case", disease94, 1, 0]],
            disease95 : ["+", ["case", disease95, 1, 0]],
            disease96 : ["+", ["case", disease96, 1, 0]],
            disease97 : ["+", ["case", disease97, 1, 0]],
            disease98 : ["+", ["case", disease98, 1, 0]],
            disease99 : ["+", ["case", disease99, 1, 0]],
            disease100 : ["+", ["case", disease100, 1, 0]],
            disease101 : ["+", ["case", disease101, 1, 0]],
            disease102 : ["+", ["case", disease102, 1, 0]],
            disease103 : ["+", ["case", disease103, 1, 0]],
            disease104 : ["+", ["case", disease104, 1, 0]],
            disease105 : ["+", ["case", disease105, 1, 0]],
            disease106 : ["+", ["case", disease106, 1, 0]],
            disease107 : ["+", ["case", disease107, 1, 0]],
            disease108 : ["+", ["case", disease108, 1, 0]],
            disease109 : ["+", ["case", disease109, 1, 0]],
            disease110 : ["+", ["case", disease110, 1, 0]],
            disease111 : ["+", ["case", disease111, 1, 0]],
            disease112 : ["+", ["case", disease112, 1, 0]],
            disease113 : ["+", ["case", disease113, 1, 0]],
            disease114 : ["+", ["case", disease114, 1, 0]],
            disease115 : ["+", ["case", disease115, 1, 0]],
            disease116 : ["+", ["case", disease116, 1, 0]],
            disease117 : ["+", ["case", disease117, 1, 0]],
            disease118 : ["+", ["case", disease118, 1, 0]],
            disease119 : ["+", ["case", disease119, 1, 0]],
            disease120 : ["+", ["case", disease120, 1, 0]],
            disease121 : ["+", ["case", disease121, 1, 0]],
            disease122 : ["+", ["case", disease122, 1, 0]],
            disease123 : ["+", ["case", disease123, 1, 0]],
            disease124 : ["+", ["case", disease124, 1, 0]],
            disease125 : ["+", ["case", disease125, 1, 0]],
            disease126 : ["+", ["case", disease126, 1, 0]],
            disease127 : ["+", ["case", disease127, 1, 0]],
            disease128 : ["+", ["case", disease128, 1, 0]],
            disease129 : ["+", ["case", disease129, 1, 0]],
            disease130 : ["+", ["case", disease130, 1, 0]],
            disease131 : ["+", ["case", disease131, 1, 0]],
            disease132 : ["+", ["case", disease132, 1, 0]],
            disease133 : ["+", ["case", disease133, 1, 0]],
            disease134 : ["+", ["case", disease134, 1, 0]],
            disease135 : ["+", ["case", disease135, 1, 0]],
            disease136 : ["+", ["case", disease136, 1, 0]],
            disease137 : ["+", ["case", disease137, 1, 0]],
            disease138 : ["+", ["case", disease138, 1, 0]],
            disease139 : ["+", ["case", disease139, 1, 0]],
            disease140 : ["+", ["case", disease140, 1, 0]],
            disease141 : ["+", ["case", disease141, 1, 0]],
            disease142 : ["+", ["case", disease142, 1, 0]],
            disease143 : ["+", ["case", disease143, 1, 0]],
            disease144 : ["+", ["case", disease144, 1, 0]],
            disease145 : ["+", ["case", disease145, 1, 0]],
            disease146 : ["+", ["case", disease146, 1, 0]],
            disease147 : ["+", ["case", disease147, 1, 0]],
            disease148 : ["+", ["case", disease148, 1, 0]],
            disease149 : ["+", ["case", disease149, 1, 0]],
            disease150 : ["+", ["case", disease150, 1, 0]],
            disease151 : ["+", ["case", disease151, 1, 0]],
            disease152 : ["+", ["case", disease152, 1, 0]],
            disease153 : ["+", ["case", disease153, 1, 0]],
            disease154 : ["+", ["case", disease154, 1, 0]],
            disease155 : ["+", ["case", disease155, 1, 0]],
            disease156 : ["+", ["case", disease156, 1, 0]],
            disease157 : ["+", ["case", disease157, 1, 0]],
            disease158 : ["+", ["case", disease158, 1, 0]],
            disease159 : ["+", ["case", disease159, 1, 0]],
            disease160 : ["+", ["case", disease160, 1, 0]],
            disease161 : ["+", ["case", disease161, 1, 0]],
            disease162 : ["+", ["case", disease162, 1, 0]],
            disease163 : ["+", ["case", disease163, 1, 0]],
            disease164 : ["+", ["case", disease164, 1, 0]],
            disease165 : ["+", ["case", disease165, 1, 0]],
            disease166 : ["+", ["case", disease166, 1, 0]],
            disease167 : ["+", ["case", disease167, 1, 0]],
            disease168 : ["+", ["case", disease168, 1, 0]],
            disease169 : ["+", ["case", disease169, 1, 0]],
            disease170 : ["+", ["case", disease170, 1, 0]],
            disease171 : ["+", ["case", disease171, 1, 0]],
            disease172 : ["+", ["case", disease172, 1, 0]],
            disease173 : ["+", ["case", disease173, 1, 0]],
            disease174 : ["+", ["case", disease174, 1, 0]],
            disease175 : ["+", ["case", disease175, 1, 0]],
            disease176 : ["+", ["case", disease176, 1, 0]],
            disease177 : ["+", ["case", disease177, 1, 0]],
            disease178 : ["+", ["case", disease178, 1, 0]],
            disease179 : ["+", ["case", disease179, 1, 0]],
            disease180 : ["+", ["case", disease180, 1, 0]],
            disease181 : ["+", ["case", disease181, 1, 0]],
            disease182 : ["+", ["case", disease182, 1, 0]],
            disease183 : ["+", ["case", disease183, 1, 0]],
            disease184 : ["+", ["case", disease184, 1, 0]],
            disease185 : ["+", ["case", disease185, 1, 0]],
            disease186 : ["+", ["case", disease186, 1, 0]],
            disease187 : ["+", ["case", disease187, 1, 0]],
            disease188 : ["+", ["case", disease188, 1, 0]],
            disease189 : ["+", ["case", disease189, 1, 0]],
            disease190 : ["+", ["case", disease190, 1, 0]],
            disease191 : ["+", ["case", disease191, 1, 0]],
            disease192 : ["+", ["case", disease192, 1, 0]],
            disease193 : ["+", ["case", disease193, 1, 0]],
            disease194 : ["+", ["case", disease194, 1, 0]],
            disease195 : ["+", ["case", disease195, 1, 0]],
            disease196 : ["+", ["case", disease196, 1, 0]],
            disease197 : ["+", ["case", disease197, 1, 0]],
            disease198 : ["+", ["case", disease198, 1, 0]],
            disease199 : ["+", ["case", disease199, 1, 0]],
            disease200 : ["+", ["case", disease200, 1, 0]],
            disease201 : ["+", ["case", disease201, 1, 0]],
            disease202 : ["+", ["case", disease202, 1, 0]],
            disease203 : ["+", ["case", disease203, 1, 0]],
            disease204 : ["+", ["case", disease204, 1, 0]],
            disease205 : ["+", ["case", disease205, 1, 0]],
            disease206 : ["+", ["case", disease206, 1, 0]],
            disease207 : ["+", ["case", disease207, 1, 0]],
            disease208 : ["+", ["case", disease208, 1, 0]],
            disease209 : ["+", ["case", disease209, 1, 0]],
            disease210 : ["+", ["case", disease210, 1, 0]],
            disease211 : ["+", ["case", disease211, 1, 0]],
            disease212 : ["+", ["case", disease212, 1, 0]],
            disease213 : ["+", ["case", disease213, 1, 0]],
            disease214 : ["+", ["case", disease214, 1, 0]],
            disease215 : ["+", ["case", disease215, 1, 0]],
            disease216 : ["+", ["case", disease216, 1, 0]],
            disease217 : ["+", ["case", disease217, 1, 0]],
            disease218 : ["+", ["case", disease218, 1, 0]],
            disease219 : ["+", ["case", disease219, 1, 0]],
            disease220 : ["+", ["case", disease220, 1, 0]],
            disease221 : ["+", ["case", disease221, 1, 0]],
            disease222 : ["+", ["case", disease222, 1, 0]],
            disease223 : ["+", ["case", disease223, 1, 0]],
            disease224 : ["+", ["case", disease224, 1, 0]],
            disease225 : ["+", ["case", disease225, 1, 0]],
            disease226 : ["+", ["case", disease226, 1, 0]],
            disease227 : ["+", ["case", disease227, 1, 0]],
            disease228 : ["+", ["case", disease228, 1, 0]],
            disease229 : ["+", ["case", disease229, 1, 0]],
            disease230 : ["+", ["case", disease230, 1, 0]],
            disease231 : ["+", ["case", disease231, 1, 0]],
            disease232 : ["+", ["case", disease232, 1, 0]],
            disease233 : ["+", ["case", disease233, 1, 0]],
            disease234 : ["+", ["case", disease234, 1, 0]],
            disease235 : ["+", ["case", disease235, 1, 0]],
            disease236 : ["+", ["case", disease236, 1, 0]],
            disease237 : ["+", ["case", disease237, 1, 0]],
            disease238 : ["+", ["case", disease238, 1, 0]],
            disease239 : ["+", ["case", disease239, 1, 0]],
            disease240 : ["+", ["case", disease240, 1, 0]],
            disease241 : ["+", ["case", disease241, 1, 0]],
            disease242 : ["+", ["case", disease242, 1, 0]],
            disease243 : ["+", ["case", disease243, 1, 0]],
            disease244 : ["+", ["case", disease244, 1, 0]],
            disease245 : ["+", ["case", disease245, 1, 0]],
            disease246 : ["+", ["case", disease246, 1, 0]],
            disease247 : ["+", ["case", disease247, 1, 0]],
            disease248 : ["+", ["case", disease248, 1, 0]],
            disease249 : ["+", ["case", disease249, 1, 0]],
            disease250 : ["+", ["case", disease250, 1, 0]],
            disease251 : ["+", ["case", disease251, 1, 0]],
            disease252 : ["+", ["case", disease252, 1, 0]],
            disease253 : ["+", ["case", disease253, 1, 0]],
            disease254 : ["+", ["case", disease254, 1, 0]],
            disease255 : ["+", ["case", disease255, 1, 0]],
            disease256 : ["+", ["case", disease256, 1, 0]],
            disease257 : ["+", ["case", disease257, 1, 0]],
            disease258 : ["+", ["case", disease258, 1, 0]],
            disease259 : ["+", ["case", disease259, 1, 0]],
            disease260 : ["+", ["case", disease260, 1, 0]],
            disease261 : ["+", ["case", disease261, 1, 0]],
            disease262 : ["+", ["case", disease262, 1, 0]],
            disease263 : ["+", ["case", disease263, 1, 0]],
            disease264 : ["+", ["case", disease264, 1, 0]],
            disease265 : ["+", ["case", disease265, 1, 0]],
            disease266 : ["+", ["case", disease266, 1, 0]],
            disease267 : ["+", ["case", disease267, 1, 0]],
            disease268 : ["+", ["case", disease268, 1, 0]],
            disease269 : ["+", ["case", disease269, 1, 0]],
            disease270 : ["+", ["case", disease270, 1, 0]],
            disease271 : ["+", ["case", disease271, 1, 0]],
            disease272 : ["+", ["case", disease272, 1, 0]],
            disease273 : ["+", ["case", disease273, 1, 0]],
            disease274 : ["+", ["case", disease274, 1, 0]],
            disease275 : ["+", ["case", disease275, 1, 0]],
            disease276 : ["+", ["case", disease276, 1, 0]],
            disease277 : ["+", ["case", disease277, 1, 0]],
            disease278 : ["+", ["case", disease278, 1, 0]],
            disease279 : ["+", ["case", disease279, 1, 0]],
            disease280 : ["+", ["case", disease280, 1, 0]],
            disease281 : ["+", ["case", disease281, 1, 0]],
            disease282 : ["+", ["case", disease282, 1, 0]],
            disease283 : ["+", ["case", disease283, 1, 0]],
            disease284 : ["+", ["case", disease284, 1, 0]],
            disease285 : ["+", ["case", disease285, 1, 0]],
            disease286 : ["+", ["case", disease286, 1, 0]],
            disease287 : ["+", ["case", disease287, 1, 0]],
            disease288 : ["+", ["case", disease288, 1, 0]],
            disease289 : ["+", ["case", disease289, 1, 0]],
            disease290 : ["+", ["case", disease290, 1, 0]],
            disease291 : ["+", ["case", disease291, 1, 0]],
            disease292 : ["+", ["case", disease292, 1, 0]],
            disease293 : ["+", ["case", disease293, 1, 0]],
            disease294 : ["+", ["case", disease294, 1, 0]],
            disease295 : ["+", ["case", disease295, 1, 0]],
            disease296 : ["+", ["case", disease296, 1, 0]],
            disease297 : ["+", ["case", disease297, 1, 0]],
            disease298 : ["+", ["case", disease298, 1, 0]],
            disease299 : ["+", ["case", disease299, 1, 0]],
            disease300 : ["+", ["case", disease300, 1, 0]],
            disease301 : ["+", ["case", disease301, 1, 0]],
            disease302 : ["+", ["case", disease302, 1, 0]],
            disease303 : ["+", ["case", disease303, 1, 0]],
            disease304 : ["+", ["case", disease304, 1, 0]],
            disease305 : ["+", ["case", disease305, 1, 0]],
            disease306 : ["+", ["case", disease306, 1, 0]],
            disease307 : ["+", ["case", disease307, 1, 0]],
            disease308 : ["+", ["case", disease308, 1, 0]],
            disease309 : ["+", ["case", disease309, 1, 0]],
            disease310 : ["+", ["case", disease310, 1, 0]],
            disease311 : ["+", ["case", disease311, 1, 0]],
            disease312 : ["+", ["case", disease312, 1, 0]],
            disease313 : ["+", ["case", disease313, 1, 0]],
            disease314 : ["+", ["case", disease314, 1, 0]],
            disease315 : ["+", ["case", disease315, 1, 0]],
            disease316 : ["+", ["case", disease316, 1, 0]],
            disease317 : ["+", ["case", disease317, 1, 0]],
            disease318 : ["+", ["case", disease318, 1, 0]],
            disease319 : ["+", ["case", disease319, 1, 0]],
            disease320 : ["+", ["case", disease320, 1, 0]],
            disease321 : ["+", ["case", disease321, 1, 0]],
            disease322 : ["+", ["case", disease322, 1, 0]],
            disease323 : ["+", ["case", disease323, 1, 0]],
            disease324 : ["+", ["case", disease324, 1, 0]],
            disease325 : ["+", ["case", disease325, 1, 0]],
            disease326 : ["+", ["case", disease326, 1, 0]],
            disease327 : ["+", ["case", disease327, 1, 0]],
            disease328 : ["+", ["case", disease328, 1, 0]],
            disease329 : ["+", ["case", disease329, 1, 0]],
            disease330 : ["+", ["case", disease330, 1, 0]],
            disease331 : ["+", ["case", disease331, 1, 0]],
            disease332 : ["+", ["case", disease332, 1, 0]],
            disease333 : ["+", ["case", disease333, 1, 0]],
            disease334 : ["+", ["case", disease334, 1, 0]],
            disease335 : ["+", ["case", disease335, 1, 0]],
            disease336 : ["+", ["case", disease336, 1, 0]],
            disease337 : ["+", ["case", disease337, 1, 0]],
            disease338 : ["+", ["case", disease338, 1, 0]],
            disease339 : ["+", ["case", disease339, 1, 0]],
            disease340 : ["+", ["case", disease340, 1, 0]],
            disease341 : ["+", ["case", disease341, 1, 0]],
            disease342 : ["+", ["case", disease342, 1, 0]],
            disease343 : ["+", ["case", disease343, 1, 0]],
            disease344 : ["+", ["case", disease344, 1, 0]],
            disease345 : ["+", ["case", disease345, 1, 0]],
            disease346 : ["+", ["case", disease346, 1, 0]],
            disease347 : ["+", ["case", disease347, 1, 0]],
            disease348 : ["+", ["case", disease348, 1, 0]],
            disease349 : ["+", ["case", disease349, 1, 0]],
            disease350 : ["+", ["case", disease350, 1, 0]],
            disease351 : ["+", ["case", disease351, 1, 0]],
            disease352 : ["+", ["case", disease352, 1, 0]],
            disease353 : ["+", ["case", disease353, 1, 0]],
            disease354 : ["+", ["case", disease354, 1, 0]],
            disease355 : ["+", ["case", disease355, 1, 0]],
            disease356 : ["+", ["case", disease356, 1, 0]],
            disease357 : ["+", ["case", disease357, 1, 0]],
            disease358 : ["+", ["case", disease358, 1, 0]],
            disease359 : ["+", ["case", disease359, 1, 0]],
            disease360 : ["+", ["case", disease360, 1, 0]],
            disease361 : ["+", ["case", disease361, 1, 0]],
            disease362 : ["+", ["case", disease362, 1, 0]],
            disease363 : ["+", ["case", disease363, 1, 0]],
            disease364 : ["+", ["case", disease364, 1, 0]],
            disease365 : ["+", ["case", disease365, 1, 0]],
            disease366 : ["+", ["case", disease366, 1, 0]],
            disease367 : ["+", ["case", disease367, 1, 0]],
            disease368 : ["+", ["case", disease368, 1, 0]],
            disease369 : ["+", ["case", disease369, 1, 0]],
            disease370 : ["+", ["case", disease370, 1, 0]],
            disease371 : ["+", ["case", disease371, 1, 0]],
            disease372 : ["+", ["case", disease372, 1, 0]],
            disease373 : ["+", ["case", disease373, 1, 0]],
            disease374 : ["+", ["case", disease374, 1, 0]],
            disease375 : ["+", ["case", disease375, 1, 0]],
            disease376 : ["+", ["case", disease376, 1, 0]],
            disease377 : ["+", ["case", disease377, 1, 0]],
            disease378 : ["+", ["case", disease378, 1, 0]],
            disease379 : ["+", ["case", disease379, 1, 0]],
            disease380 : ["+", ["case", disease380, 1, 0]],
            disease381 : ["+", ["case", disease381, 1, 0]],
            disease382 : ["+", ["case", disease382, 1, 0]],
            disease383 : ["+", ["case", disease383, 1, 0]],
            disease384 : ["+", ["case", disease384, 1, 0]],
            disease385 : ["+", ["case", disease385, 1, 0]],
            disease386 : ["+", ["case", disease386, 1, 0]],
            disease387 : ["+", ["case", disease387, 1, 0]],
            disease388 : ["+", ["case", disease388, 1, 0]],
            disease389 : ["+", ["case", disease389, 1, 0]],
            disease390 : ["+", ["case", disease390, 1, 0]],
            disease391 : ["+", ["case", disease391, 1, 0]],
            disease392 : ["+", ["case", disease392, 1, 0]],
            disease393 : ["+", ["case", disease393, 1, 0]],
            disease394 : ["+", ["case", disease394, 1, 0]],
            disease395 : ["+", ["case", disease395, 1, 0]],
            disease396 : ["+", ["case", disease396, 1, 0]],
            disease397 : ["+", ["case", disease397, 1, 0]],
            disease398 : ["+", ["case", disease398, 1, 0]],
            disease399 : ["+", ["case", disease399, 1, 0]],
            disease400 : ["+", ["case", disease400, 1, 0]],
            disease401 : ["+", ["case", disease401, 1, 0]],
            disease402 : ["+", ["case", disease402, 1, 0]],
            disease403 : ["+", ["case", disease403, 1, 0]],
            disease404 : ["+", ["case", disease404, 1, 0]],
            disease405 : ["+", ["case", disease405, 1, 0]],
            disease406 : ["+", ["case", disease406, 1, 0]],
            disease407 : ["+", ["case", disease407, 1, 0]],
            disease408 : ["+", ["case", disease408, 1, 0]],
            disease409 : ["+", ["case", disease409, 1, 0]],
            disease410 : ["+", ["case", disease410, 1, 0]],
            disease411 : ["+", ["case", disease411, 1, 0]],
            disease412 : ["+", ["case", disease412, 1, 0]],
            disease413 : ["+", ["case", disease413, 1, 0]],
            disease414 : ["+", ["case", disease414, 1, 0]],
            disease415 : ["+", ["case", disease415, 1, 0]],
            disease416 : ["+", ["case", disease416, 1, 0]],
            disease417 : ["+", ["case", disease417, 1, 0]],
            disease418 : ["+", ["case", disease418, 1, 0]],
            disease419 : ["+", ["case", disease419, 1, 0]],
            disease420 : ["+", ["case", disease420, 1, 0]],
            disease421 : ["+", ["case", disease421, 1, 0]],
            disease422 : ["+", ["case", disease422, 1, 0]],
            disease423 : ["+", ["case", disease423, 1, 0]],
            disease424 : ["+", ["case", disease424, 1, 0]],
            disease425 : ["+", ["case", disease425, 1, 0]],
            disease426 : ["+", ["case", disease426, 1, 0]],
            disease427 : ["+", ["case", disease427, 1, 0]],
            disease428 : ["+", ["case", disease428, 1, 0]],
            disease429 : ["+", ["case", disease429, 1, 0]],
            disease430 : ["+", ["case", disease430, 1, 0]],
            disease431 : ["+", ["case", disease431, 1, 0]],
            disease432 : ["+", ["case", disease432, 1, 0]],
            disease433 : ["+", ["case", disease433, 1, 0]],
            disease434 : ["+", ["case", disease434, 1, 0]],
            disease435 : ["+", ["case", disease435, 1, 0]],
            disease436 : ["+", ["case", disease436, 1, 0]],
            disease437 : ["+", ["case", disease437, 1, 0]],
            disease438 : ["+", ["case", disease438, 1, 0]],
            disease439 : ["+", ["case", disease439, 1, 0]],
            disease440 : ["+", ["case", disease440, 1, 0]],
            disease441 : ["+", ["case", disease441, 1, 0]],
            disease442 : ["+", ["case", disease442, 1, 0]],
            disease443 : ["+", ["case", disease443, 1, 0]],
            disease444 : ["+", ["case", disease444, 1, 0]],
            disease445 : ["+", ["case", disease445, 1, 0]],
            disease446 : ["+", ["case", disease446, 1, 0]],
            disease447 : ["+", ["case", disease447, 1, 0]],
            disease448 : ["+", ["case", disease448, 1, 0]],
            disease449 : ["+", ["case", disease449, 1, 0]],
            disease450 : ["+", ["case", disease450, 1, 0]],
            disease451 : ["+", ["case", disease451, 1, 0]],
            disease452 : ["+", ["case", disease452, 1, 0]],
            disease453 : ["+", ["case", disease453, 1, 0]],
            disease454 : ["+", ["case", disease454, 1, 0]],
            disease455 : ["+", ["case", disease455, 1, 0]],
            disease456 : ["+", ["case", disease456, 1, 0]],
            disease457 : ["+", ["case", disease457, 1, 0]],
            disease458 : ["+", ["case", disease458, 1, 0]],
            disease459 : ["+", ["case", disease459, 1, 0]],
            disease460 : ["+", ["case", disease460, 1, 0]],
            disease461 : ["+", ["case", disease461, 1, 0]],
            disease462 : ["+", ["case", disease462, 1, 0]],
            disease463 : ["+", ["case", disease463, 1, 0]],
            disease464 : ["+", ["case", disease464, 1, 0]],
            disease465 : ["+", ["case", disease465, 1, 0]],
            disease466 : ["+", ["case", disease466, 1, 0]],
            disease467 : ["+", ["case", disease467, 1, 0]],
            disease468 : ["+", ["case", disease468, 1, 0]],
            disease469 : ["+", ["case", disease469, 1, 0]],
            disease470 : ["+", ["case", disease470, 1, 0]],
            disease471 : ["+", ["case", disease471, 1, 0]],
            disease472 : ["+", ["case", disease472, 1, 0]],
            disease473 : ["+", ["case", disease473, 1, 0]],
            disease474 : ["+", ["case", disease474, 1, 0]],
            disease475 : ["+", ["case", disease475, 1, 0]],
            disease476 : ["+", ["case", disease476, 1, 0]],
            disease477 : ["+", ["case", disease477, 1, 0]],
            disease478 : ["+", ["case", disease478, 1, 0]],
            disease479 : ["+", ["case", disease479, 1, 0]],
            disease480 : ["+", ["case", disease480, 1, 0]],
            disease481 : ["+", ["case", disease481, 1, 0]],
            disease482 : ["+", ["case", disease482, 1, 0]],
            disease483 : ["+", ["case", disease483, 1, 0]],
            disease484 : ["+", ["case", disease484, 1, 0]],
            disease485 : ["+", ["case", disease485, 1, 0]],
            disease486 : ["+", ["case", disease486, 1, 0]],
            disease487 : ["+", ["case", disease487, 1, 0]],
            disease488 : ["+", ["case", disease488, 1, 0]],
            disease489 : ["+", ["case", disease489, 1, 0]],
            disease490 : ["+", ["case", disease490, 1, 0]],
            disease491 : ["+", ["case", disease491, 1, 0]],
            disease492 : ["+", ["case", disease492, 1, 0]],
            disease493 : ["+", ["case", disease493, 1, 0]],
            disease494 : ["+", ["case", disease494, 1, 0]],
            disease495 : ["+", ["case", disease495, 1, 0]],
            disease496 : ["+", ["case", disease496, 1, 0]],
            disease497 : ["+", ["case", disease497, 1, 0]]
          }
        });
        
        map.addLayer({
          'id': 'disease_individual',
          'type': 'circle',
          'source': 'diseases',
          'filter': ['!=', ['get', 'cluster'], true],
          'paint': {
            'circle-color': ['case',
            disease1, colorScale('disease1'),
            disease2, colorScale('disease2'),
            disease3, colorScale('disease3'),
            disease4, colorScale('disease4'),
            disease5, colorScale('disease5'),
            disease6, colorScale('disease6'),
            disease7, colorScale('disease7'),
            disease8, colorScale('disease8'),
            disease9, colorScale('disease9'),
            disease10, colorScale('disease10'),
            disease11, colorScale('disease11'),
            disease12, colorScale('disease12'),
            disease13, colorScale('disease13'),
            disease14, colorScale('disease14'),
            disease15, colorScale('disease15'),
            disease16, colorScale('disease16'),
            disease17, colorScale('disease17'),
            disease18, colorScale('disease18'),
            disease19, colorScale('disease19'),
            disease20, colorScale('disease20'),
            disease21, colorScale('disease21'),
            disease22, colorScale('disease22'),
            disease23, colorScale('disease23'),
            disease24, colorScale('disease24'),
            disease25, colorScale('disease25'),
            disease26, colorScale('disease26'),
            disease27, colorScale('disease27'),
            disease28, colorScale('disease28'),
            disease29, colorScale('disease29'),
            disease30, colorScale('disease30'),
            disease31, colorScale('disease31'),
            disease32, colorScale('disease32'),
            disease33, colorScale('disease33'),
            disease34, colorScale('disease34'),
            disease35, colorScale('disease35'),
            disease36, colorScale('disease36'),
            disease37, colorScale('disease37'),
            disease38, colorScale('disease38'),
            disease39, colorScale('disease39'),
            disease40, colorScale('disease40'),
            disease41, colorScale('disease41'),
            disease42, colorScale('disease42'),
            disease43, colorScale('disease43'),
            disease44, colorScale('disease44'),
            disease45, colorScale('disease45'),
            disease46, colorScale('disease46'),
            disease47, colorScale('disease47'),
            disease48, colorScale('disease48'),
            disease49, colorScale('disease49'),
            disease50, colorScale('disease50'),
            disease51, colorScale('disease51'),
            disease52, colorScale('disease52'),
            disease53, colorScale('disease53'),
            disease54, colorScale('disease54'),
            disease55, colorScale('disease55'),
            disease56, colorScale('disease56'),
            disease57, colorScale('disease57'),
            disease58, colorScale('disease58'),
            disease59, colorScale('disease59'),
            disease60, colorScale('disease60'),
            disease61, colorScale('disease61'),
            disease62, colorScale('disease62'),
            disease63, colorScale('disease63'),
            disease64, colorScale('disease64'),
            disease65, colorScale('disease65'),
            disease66, colorScale('disease66'),
            disease67, colorScale('disease67'),
            disease68, colorScale('disease68'),
            disease69, colorScale('disease69'),
            disease70, colorScale('disease70'),
            disease71, colorScale('disease71'),
            disease72, colorScale('disease72'),
            disease73, colorScale('disease73'),
            disease74, colorScale('disease74'),
            disease75, colorScale('disease75'),
            disease76, colorScale('disease76'),
            disease77, colorScale('disease77'),
            disease78, colorScale('disease78'),
            disease79, colorScale('disease79'),
            disease80, colorScale('disease80'),
            disease81, colorScale('disease81'),
            disease82, colorScale('disease82'),
            disease83, colorScale('disease83'),
            disease84, colorScale('disease84'),
            disease85, colorScale('disease85'),
            disease86, colorScale('disease86'),
            disease87, colorScale('disease87'),
            disease88, colorScale('disease88'),
            disease89, colorScale('disease89'),
            disease90, colorScale('disease90'),
            disease91, colorScale('disease91'),
            disease92, colorScale('disease92'),
            disease93, colorScale('disease93'),
            disease94, colorScale('disease94'),
            disease95, colorScale('disease95'),
            disease96, colorScale('disease96'),
            disease97, colorScale('disease97'),
            disease98, colorScale('disease98'),
            disease99, colorScale('disease99'),
            disease100, colorScale('disease100'),
            disease101, colorScale('disease101'),
            disease102, colorScale('disease102'),
            disease103, colorScale('disease103'),
            disease104, colorScale('disease104'),
            disease105, colorScale('disease105'),
            disease106, colorScale('disease106'),
            disease107, colorScale('disease107'),
            disease108, colorScale('disease108'),
            disease109, colorScale('disease109'),
            disease110, colorScale('disease110'),
            disease111, colorScale('disease111'),
            disease112, colorScale('disease112'),
            disease113, colorScale('disease113'),
            disease114, colorScale('disease114'),
            disease115, colorScale('disease115'),
            disease116, colorScale('disease116'),
            disease117, colorScale('disease117'),
            disease118, colorScale('disease118'),
            disease119, colorScale('disease119'),
            disease120, colorScale('disease120'),
            disease121, colorScale('disease121'),
            disease122, colorScale('disease122'),
            disease123, colorScale('disease123'),
            disease124, colorScale('disease124'),
            disease125, colorScale('disease125'),
            disease126, colorScale('disease126'),
            disease127, colorScale('disease127'),
            disease128, colorScale('disease128'),
            disease129, colorScale('disease129'),
            disease130, colorScale('disease130'),
            disease131, colorScale('disease131'),
            disease132, colorScale('disease132'),
            disease133, colorScale('disease133'),
            disease134, colorScale('disease134'),
            disease135, colorScale('disease135'),
            disease136, colorScale('disease136'),
            disease137, colorScale('disease137'),
            disease138, colorScale('disease138'),
            disease139, colorScale('disease139'),
            disease140, colorScale('disease140'),
            disease141, colorScale('disease141'),
            disease142, colorScale('disease142'),
            disease143, colorScale('disease143'),
            disease144, colorScale('disease144'),
            disease145, colorScale('disease145'),
            disease146, colorScale('disease146'),
            disease147, colorScale('disease147'),
            disease148, colorScale('disease148'),
            disease149, colorScale('disease149'),
            disease150, colorScale('disease150'),
            disease151, colorScale('disease151'),
            disease152, colorScale('disease152'),
            disease153, colorScale('disease153'),
            disease154, colorScale('disease154'),
            disease155, colorScale('disease155'),
            disease156, colorScale('disease156'),
            disease157, colorScale('disease157'),
            disease158, colorScale('disease158'),
            disease159, colorScale('disease159'),
            disease160, colorScale('disease160'),
            disease161, colorScale('disease161'),
            disease162, colorScale('disease162'),
            disease163, colorScale('disease163'),
            disease164, colorScale('disease164'),
            disease165, colorScale('disease165'),
            disease166, colorScale('disease166'),
            disease167, colorScale('disease167'),
            disease168, colorScale('disease168'),
            disease169, colorScale('disease169'),
            disease170, colorScale('disease170'),
            disease171, colorScale('disease171'),
            disease172, colorScale('disease172'),
            disease173, colorScale('disease173'),
            disease174, colorScale('disease174'),
            disease175, colorScale('disease175'),
            disease176, colorScale('disease176'),
            disease177, colorScale('disease177'),
            disease178, colorScale('disease178'),
            disease179, colorScale('disease179'),
            disease180, colorScale('disease180'),
            disease181, colorScale('disease181'),
            disease182, colorScale('disease182'),
            disease183, colorScale('disease183'),
            disease184, colorScale('disease184'),
            disease185, colorScale('disease185'),
            disease186, colorScale('disease186'),
            disease187, colorScale('disease187'),
            disease188, colorScale('disease188'),
            disease189, colorScale('disease189'),
            disease190, colorScale('disease190'),
            disease191, colorScale('disease191'),
            disease192, colorScale('disease192'),
            disease193, colorScale('disease193'),
            disease194, colorScale('disease194'),
            disease195, colorScale('disease195'),
            disease196, colorScale('disease196'),
            disease197, colorScale('disease197'),
            disease198, colorScale('disease198'),
            disease199, colorScale('disease199'),
            disease200, colorScale('disease200'),
            disease201, colorScale('disease201'),
            disease202, colorScale('disease202'),
            disease203, colorScale('disease203'),
            disease204, colorScale('disease204'),
            disease205, colorScale('disease205'),
            disease206, colorScale('disease206'),
            disease207, colorScale('disease207'),
            disease208, colorScale('disease208'),
            disease209, colorScale('disease209'),
            disease210, colorScale('disease210'),
            disease211, colorScale('disease211'),
            disease212, colorScale('disease212'),
            disease213, colorScale('disease213'),
            disease214, colorScale('disease214'),
            disease215, colorScale('disease215'),
            disease216, colorScale('disease216'),
            disease217, colorScale('disease217'),
            disease218, colorScale('disease218'),
            disease219, colorScale('disease219'),
            disease220, colorScale('disease220'),
            disease221, colorScale('disease221'),
            disease222, colorScale('disease222'),
            disease223, colorScale('disease223'),
            disease224, colorScale('disease224'),
            disease225, colorScale('disease225'),
            disease226, colorScale('disease226'),
            disease227, colorScale('disease227'),
            disease228, colorScale('disease228'),
            disease229, colorScale('disease229'),
            disease230, colorScale('disease230'),
            disease231, colorScale('disease231'),
            disease232, colorScale('disease232'),
            disease233, colorScale('disease233'),
            disease234, colorScale('disease234'),
            disease235, colorScale('disease235'),
            disease236, colorScale('disease236'),
            disease237, colorScale('disease237'),
            disease238, colorScale('disease238'),
            disease239, colorScale('disease239'),
            disease240, colorScale('disease240'),
            disease241, colorScale('disease241'),
            disease242, colorScale('disease242'),
            disease243, colorScale('disease243'),
            disease244, colorScale('disease244'),
            disease245, colorScale('disease245'),
            disease246, colorScale('disease246'),
            disease247, colorScale('disease247'),
            disease248, colorScale('disease248'),
            disease249, colorScale('disease249'),
            disease250, colorScale('disease250'),
            disease251, colorScale('disease251'),
            disease252, colorScale('disease252'),
            disease253, colorScale('disease253'),
            disease254, colorScale('disease254'),
            disease255, colorScale('disease255'),
            disease256, colorScale('disease256'),
            disease257, colorScale('disease257'),
            disease258, colorScale('disease258'),
            disease259, colorScale('disease259'),
            disease260, colorScale('disease260'),
            disease261, colorScale('disease261'),
            disease262, colorScale('disease262'),
            disease263, colorScale('disease263'),
            disease264, colorScale('disease264'),
            disease265, colorScale('disease265'),
            disease266, colorScale('disease266'),
            disease267, colorScale('disease267'),
            disease268, colorScale('disease268'),
            disease269, colorScale('disease269'),
            disease270, colorScale('disease270'),
            disease271, colorScale('disease271'),
            disease272, colorScale('disease272'),
            disease273, colorScale('disease273'),
            disease274, colorScale('disease274'),
            disease275, colorScale('disease275'),
            disease276, colorScale('disease276'),
            disease277, colorScale('disease277'),
            disease278, colorScale('disease278'),
            disease279, colorScale('disease279'),
            disease280, colorScale('disease280'),
            disease281, colorScale('disease281'),
            disease282, colorScale('disease282'),
            disease283, colorScale('disease283'),
            disease284, colorScale('disease284'),
            disease285, colorScale('disease285'),
            disease286, colorScale('disease286'),
            disease287, colorScale('disease287'),
            disease288, colorScale('disease288'),
            disease289, colorScale('disease289'),
            disease290, colorScale('disease290'),
            disease291, colorScale('disease291'),
            disease292, colorScale('disease292'),
            disease293, colorScale('disease293'),
            disease294, colorScale('disease294'),
            disease295, colorScale('disease295'),
            disease296, colorScale('disease296'),
            disease297, colorScale('disease297'),
            disease298, colorScale('disease298'),
            disease299, colorScale('disease299'),
            disease300, colorScale('disease300'),
            disease301, colorScale('disease301'),
            disease302, colorScale('disease302'),
            disease303, colorScale('disease303'),
            disease304, colorScale('disease304'),
            disease305, colorScale('disease305'),
            disease306, colorScale('disease306'),
            disease307, colorScale('disease307'),
            disease308, colorScale('disease308'),
            disease309, colorScale('disease309'),
            disease310, colorScale('disease310'),
            disease311, colorScale('disease311'),
            disease312, colorScale('disease312'),
            disease313, colorScale('disease313'),
            disease314, colorScale('disease314'),
            disease315, colorScale('disease315'),
            disease316, colorScale('disease316'),
            disease317, colorScale('disease317'),
            disease318, colorScale('disease318'),
            disease319, colorScale('disease319'),
            disease320, colorScale('disease320'),
            disease321, colorScale('disease321'),
            disease322, colorScale('disease322'),
            disease323, colorScale('disease323'),
            disease324, colorScale('disease324'),
            disease325, colorScale('disease325'),
            disease326, colorScale('disease326'),
            disease327, colorScale('disease327'),
            disease328, colorScale('disease328'),
            disease329, colorScale('disease329'),
            disease330, colorScale('disease330'),
            disease331, colorScale('disease331'),
            disease332, colorScale('disease332'),
            disease333, colorScale('disease333'),
            disease334, colorScale('disease334'),
            disease335, colorScale('disease335'),
            disease336, colorScale('disease336'),
            disease337, colorScale('disease337'),
            disease338, colorScale('disease338'),
            disease339, colorScale('disease339'),
            disease340, colorScale('disease340'),
            disease341, colorScale('disease341'),
            disease342, colorScale('disease342'),
            disease343, colorScale('disease343'),
            disease344, colorScale('disease344'),
            disease345, colorScale('disease345'),
            disease346, colorScale('disease346'),
            disease347, colorScale('disease347'),
            disease348, colorScale('disease348'),
            disease349, colorScale('disease349'),
            disease350, colorScale('disease350'),
            disease351, colorScale('disease351'),
            disease352, colorScale('disease352'),
            disease353, colorScale('disease353'),
            disease354, colorScale('disease354'),
            disease355, colorScale('disease355'),
            disease356, colorScale('disease356'),
            disease357, colorScale('disease357'),
            disease358, colorScale('disease358'),
            disease359, colorScale('disease359'),
            disease360, colorScale('disease360'),
            disease361, colorScale('disease361'),
            disease362, colorScale('disease362'),
            disease363, colorScale('disease363'),
            disease364, colorScale('disease364'),
            disease365, colorScale('disease365'),
            disease366, colorScale('disease366'),
            disease367, colorScale('disease367'),
            disease368, colorScale('disease368'),
            disease369, colorScale('disease369'),
            disease370, colorScale('disease370'),
            disease371, colorScale('disease371'),
            disease372, colorScale('disease372'),
            disease373, colorScale('disease373'),
            disease374, colorScale('disease374'),
            disease375, colorScale('disease375'),
            disease376, colorScale('disease376'),
            disease377, colorScale('disease377'),
            disease378, colorScale('disease378'),
            disease379, colorScale('disease379'),
            disease380, colorScale('disease380'),
            disease381, colorScale('disease381'),
            disease382, colorScale('disease382'),
            disease383, colorScale('disease383'),
            disease384, colorScale('disease384'),
            disease385, colorScale('disease385'),
            disease386, colorScale('disease386'),
            disease387, colorScale('disease387'),
            disease388, colorScale('disease388'),
            disease389, colorScale('disease389'),
            disease390, colorScale('disease390'),
            disease391, colorScale('disease391'),
            disease392, colorScale('disease392'),
            disease393, colorScale('disease393'),
            disease394, colorScale('disease394'),
            disease395, colorScale('disease395'),
            disease396, colorScale('disease396'),
            disease397, colorScale('disease397'),
            disease398, colorScale('disease398'),
            disease399, colorScale('disease399'),
            disease400, colorScale('disease400'),
            disease401, colorScale('disease401'),
            disease402, colorScale('disease402'),
            disease403, colorScale('disease403'),
            disease404, colorScale('disease404'),
            disease405, colorScale('disease405'),
            disease406, colorScale('disease406'),
            disease407, colorScale('disease407'),
            disease408, colorScale('disease408'),
            disease409, colorScale('disease409'),
            disease410, colorScale('disease410'),
            disease411, colorScale('disease411'),
            disease412, colorScale('disease412'),
            disease413, colorScale('disease413'),
            disease414, colorScale('disease414'),
            disease415, colorScale('disease415'),
            disease416, colorScale('disease416'),
            disease417, colorScale('disease417'),
            disease418, colorScale('disease418'),
            disease419, colorScale('disease419'),
            disease420, colorScale('disease420'),
            disease421, colorScale('disease421'),
            disease422, colorScale('disease422'),
            disease423, colorScale('disease423'),
            disease424, colorScale('disease424'),
            disease425, colorScale('disease425'),
            disease426, colorScale('disease426'),
            disease427, colorScale('disease427'),
            disease428, colorScale('disease428'),
            disease429, colorScale('disease429'),
            disease430, colorScale('disease430'),
            disease431, colorScale('disease431'),
            disease432, colorScale('disease432'),
            disease433, colorScale('disease433'),
            disease434, colorScale('disease434'),
            disease435, colorScale('disease435'),
            disease436, colorScale('disease436'),
            disease437, colorScale('disease437'),
            disease438, colorScale('disease438'),
            disease439, colorScale('disease439'),
            disease440, colorScale('disease440'),
            disease441, colorScale('disease441'),
            disease442, colorScale('disease442'),
            disease443, colorScale('disease443'),
            disease444, colorScale('disease444'),
            disease445, colorScale('disease445'),
            disease446, colorScale('disease446'),
            disease447, colorScale('disease447'),
            disease448, colorScale('disease448'),
            disease449, colorScale('disease449'),
            disease450, colorScale('disease450'),
            disease451, colorScale('disease451'),
            disease452, colorScale('disease452'),
            disease453, colorScale('disease453'),
            disease454, colorScale('disease454'),
            disease455, colorScale('disease455'),
            disease456, colorScale('disease456'),
            disease457, colorScale('disease457'),
            disease458, colorScale('disease458'),
            disease459, colorScale('disease459'),
            disease460, colorScale('disease460'),
            disease461, colorScale('disease461'),
            disease462, colorScale('disease462'),
            disease463, colorScale('disease463'),
            disease464, colorScale('disease464'),
            disease465, colorScale('disease465'),
            disease466, colorScale('disease466'),
            disease467, colorScale('disease467'),
            disease468, colorScale('disease468'),
            disease469, colorScale('disease469'),
            disease470, colorScale('disease470'),
            disease471, colorScale('disease471'),
            disease472, colorScale('disease472'),
            disease473, colorScale('disease473'),
            disease474, colorScale('disease474'),
            disease475, colorScale('disease475'),
            disease476, colorScale('disease476'),
            disease477, colorScale('disease477'),
            disease478, colorScale('disease478'),
            disease479, colorScale('disease479'),
            disease480, colorScale('disease480'),
            disease481, colorScale('disease481'),
            disease482, colorScale('disease482'),
            disease483, colorScale('disease483'),
            disease484, colorScale('disease484'),
            disease485, colorScale('disease485'),
            disease486, colorScale('disease486'),
            disease487, colorScale('disease487'),
            disease488, colorScale('disease488'),
            disease489, colorScale('disease489'),
            disease490, colorScale('disease490'),
            disease491, colorScale('disease491'),
            disease492, colorScale('disease492'),
            disease493, colorScale('disease493'),
            disease494, colorScale('disease494'),
            disease495, colorScale('disease495'),
            disease496, colorScale('disease496'),
            disease497, colorScale('disease497'), '#ffed6f'],
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
              disease1, colorScale('disease1'),
              disease2, colorScale('disease2'),
              disease3, colorScale('disease3'),
              disease4, colorScale('disease4'),
              disease5, colorScale('disease5'),
              disease6, colorScale('disease6'),
              disease7, colorScale('disease7'),
              disease8, colorScale('disease8'),
              disease9, colorScale('disease9'),
              disease10, colorScale('disease10'),
              disease11, colorScale('disease11'),
              disease12, colorScale('disease12'),
              disease13, colorScale('disease13'),
              disease14, colorScale('disease14'),
              disease15, colorScale('disease15'),
              disease16, colorScale('disease16'),
              disease17, colorScale('disease17'),
              disease18, colorScale('disease18'),
              disease19, colorScale('disease19'),
              disease20, colorScale('disease20'),
              disease21, colorScale('disease21'),
              disease22, colorScale('disease22'),
              disease23, colorScale('disease23'),
              disease24, colorScale('disease24'),
              disease25, colorScale('disease25'),
              disease26, colorScale('disease26'),
              disease27, colorScale('disease27'),
              disease28, colorScale('disease28'),
              disease29, colorScale('disease29'),
              disease30, colorScale('disease30'),
              disease31, colorScale('disease31'),
              disease32, colorScale('disease32'),
              disease33, colorScale('disease33'),
              disease34, colorScale('disease34'),
              disease35, colorScale('disease35'),
              disease36, colorScale('disease36'),
              disease37, colorScale('disease37'),
              disease38, colorScale('disease38'),
              disease39, colorScale('disease39'),
              disease40, colorScale('disease40'),
              disease41, colorScale('disease41'),
              disease42, colorScale('disease42'),
              disease43, colorScale('disease43'),
              disease44, colorScale('disease44'),
              disease45, colorScale('disease45'),
              disease46, colorScale('disease46'),
              disease47, colorScale('disease47'),
              disease48, colorScale('disease48'),
              disease49, colorScale('disease49'),
              disease50, colorScale('disease50'),
              disease51, colorScale('disease51'),
              disease52, colorScale('disease52'),
              disease53, colorScale('disease53'),
              disease54, colorScale('disease54'),
              disease55, colorScale('disease55'),
              disease56, colorScale('disease56'),
              disease57, colorScale('disease57'),
              disease58, colorScale('disease58'),
              disease59, colorScale('disease59'),
              disease60, colorScale('disease60'),
              disease61, colorScale('disease61'),
              disease62, colorScale('disease62'),
              disease63, colorScale('disease63'),
              disease64, colorScale('disease64'),
              disease65, colorScale('disease65'),
              disease66, colorScale('disease66'),
              disease67, colorScale('disease67'),
              disease68, colorScale('disease68'),
              disease69, colorScale('disease69'),
              disease70, colorScale('disease70'),
              disease71, colorScale('disease71'),
              disease72, colorScale('disease72'),
              disease73, colorScale('disease73'),
              disease74, colorScale('disease74'),
              disease75, colorScale('disease75'),
              disease76, colorScale('disease76'),
              disease77, colorScale('disease77'),
              disease78, colorScale('disease78'),
              disease79, colorScale('disease79'),
              disease80, colorScale('disease80'),
              disease81, colorScale('disease81'),
              disease82, colorScale('disease82'),
              disease83, colorScale('disease83'),
              disease84, colorScale('disease84'),
              disease85, colorScale('disease85'),
              disease86, colorScale('disease86'),
              disease87, colorScale('disease87'),
              disease88, colorScale('disease88'),
              disease89, colorScale('disease89'),
              disease90, colorScale('disease90'),
              disease91, colorScale('disease91'),
              disease92, colorScale('disease92'),
              disease93, colorScale('disease93'),
              disease94, colorScale('disease94'),
              disease95, colorScale('disease95'),
              disease96, colorScale('disease96'),
              disease97, colorScale('disease97'),
              disease98, colorScale('disease98'),
              disease99, colorScale('disease99'),
              disease100, colorScale('disease100'),
              disease101, colorScale('disease101'),
              disease102, colorScale('disease102'),
              disease103, colorScale('disease103'),
              disease104, colorScale('disease104'),
              disease105, colorScale('disease105'),
              disease106, colorScale('disease106'),
              disease107, colorScale('disease107'),
              disease108, colorScale('disease108'),
              disease109, colorScale('disease109'),
              disease110, colorScale('disease110'),
              disease111, colorScale('disease111'),
              disease112, colorScale('disease112'),
              disease113, colorScale('disease113'),
              disease114, colorScale('disease114'),
              disease115, colorScale('disease115'),
              disease116, colorScale('disease116'),
              disease117, colorScale('disease117'),
              disease118, colorScale('disease118'),
              disease119, colorScale('disease119'),
              disease120, colorScale('disease120'),
              disease121, colorScale('disease121'),
              disease122, colorScale('disease122'),
              disease123, colorScale('disease123'),
              disease124, colorScale('disease124'),
              disease125, colorScale('disease125'),
              disease126, colorScale('disease126'),
              disease127, colorScale('disease127'),
              disease128, colorScale('disease128'),
              disease129, colorScale('disease129'),
              disease130, colorScale('disease130'),
              disease131, colorScale('disease131'),
              disease132, colorScale('disease132'),
              disease133, colorScale('disease133'),
              disease134, colorScale('disease134'),
              disease135, colorScale('disease135'),
              disease136, colorScale('disease136'),
              disease137, colorScale('disease137'),
              disease138, colorScale('disease138'),
              disease139, colorScale('disease139'),
              disease140, colorScale('disease140'),
              disease141, colorScale('disease141'),
              disease142, colorScale('disease142'),
              disease143, colorScale('disease143'),
              disease144, colorScale('disease144'),
              disease145, colorScale('disease145'),
              disease146, colorScale('disease146'),
              disease147, colorScale('disease147'),
              disease148, colorScale('disease148'),
              disease149, colorScale('disease149'),
              disease150, colorScale('disease150'),
              disease151, colorScale('disease151'),
              disease152, colorScale('disease152'),
              disease153, colorScale('disease153'),
              disease154, colorScale('disease154'),
              disease155, colorScale('disease155'),
              disease156, colorScale('disease156'),
              disease157, colorScale('disease157'),
              disease158, colorScale('disease158'),
              disease159, colorScale('disease159'),
              disease160, colorScale('disease160'),
              disease161, colorScale('disease161'),
              disease162, colorScale('disease162'),
              disease163, colorScale('disease163'),
              disease164, colorScale('disease164'),
              disease165, colorScale('disease165'),
              disease166, colorScale('disease166'),
              disease167, colorScale('disease167'),
              disease168, colorScale('disease168'),
              disease169, colorScale('disease169'),
              disease170, colorScale('disease170'),
              disease171, colorScale('disease171'),
              disease172, colorScale('disease172'),
              disease173, colorScale('disease173'),
              disease174, colorScale('disease174'),
              disease175, colorScale('disease175'),
              disease176, colorScale('disease176'),
              disease177, colorScale('disease177'),
              disease178, colorScale('disease178'),
              disease179, colorScale('disease179'),
              disease180, colorScale('disease180'),
              disease181, colorScale('disease181'),
              disease182, colorScale('disease182'),
              disease183, colorScale('disease183'),
              disease184, colorScale('disease184'),
              disease185, colorScale('disease185'),
              disease186, colorScale('disease186'),
              disease187, colorScale('disease187'),
              disease188, colorScale('disease188'),
              disease189, colorScale('disease189'),
              disease190, colorScale('disease190'),
              disease191, colorScale('disease191'),
              disease192, colorScale('disease192'),
              disease193, colorScale('disease193'),
              disease194, colorScale('disease194'),
              disease195, colorScale('disease195'),
              disease196, colorScale('disease196'),
              disease197, colorScale('disease197'),
              disease198, colorScale('disease198'),
              disease199, colorScale('disease199'),
              disease200, colorScale('disease200'),
              disease201, colorScale('disease201'),
              disease202, colorScale('disease202'),
              disease203, colorScale('disease203'),
              disease204, colorScale('disease204'),
              disease205, colorScale('disease205'),
              disease206, colorScale('disease206'),
              disease207, colorScale('disease207'),
              disease208, colorScale('disease208'),
              disease209, colorScale('disease209'),
              disease210, colorScale('disease210'),
              disease211, colorScale('disease211'),
              disease212, colorScale('disease212'),
              disease213, colorScale('disease213'),
              disease214, colorScale('disease214'),
              disease215, colorScale('disease215'),
              disease216, colorScale('disease216'),
              disease217, colorScale('disease217'),
              disease218, colorScale('disease218'),
              disease219, colorScale('disease219'),
              disease220, colorScale('disease220'),
              disease221, colorScale('disease221'),
              disease222, colorScale('disease222'),
              disease223, colorScale('disease223'),
              disease224, colorScale('disease224'),
              disease225, colorScale('disease225'),
              disease226, colorScale('disease226'),
              disease227, colorScale('disease227'),
              disease228, colorScale('disease228'),
              disease229, colorScale('disease229'),
              disease230, colorScale('disease230'),
              disease231, colorScale('disease231'),
              disease232, colorScale('disease232'),
              disease233, colorScale('disease233'),
              disease234, colorScale('disease234'),
              disease235, colorScale('disease235'),
              disease236, colorScale('disease236'),
              disease237, colorScale('disease237'),
              disease238, colorScale('disease238'),
              disease239, colorScale('disease239'),
              disease240, colorScale('disease240'),
              disease241, colorScale('disease241'),
              disease242, colorScale('disease242'),
              disease243, colorScale('disease243'),
              disease244, colorScale('disease244'),
              disease245, colorScale('disease245'),
              disease246, colorScale('disease246'),
              disease247, colorScale('disease247'),
              disease248, colorScale('disease248'),
              disease249, colorScale('disease249'),
              disease250, colorScale('disease250'),
              disease251, colorScale('disease251'),
              disease252, colorScale('disease252'),
              disease253, colorScale('disease253'),
              disease254, colorScale('disease254'),
              disease255, colorScale('disease255'),
              disease256, colorScale('disease256'),
              disease257, colorScale('disease257'),
              disease258, colorScale('disease258'),
              disease259, colorScale('disease259'),
              disease260, colorScale('disease260'),
              disease261, colorScale('disease261'),
              disease262, colorScale('disease262'),
              disease263, colorScale('disease263'),
              disease264, colorScale('disease264'),
              disease265, colorScale('disease265'),
              disease266, colorScale('disease266'),
              disease267, colorScale('disease267'),
              disease268, colorScale('disease268'),
              disease269, colorScale('disease269'),
              disease270, colorScale('disease270'),
              disease271, colorScale('disease271'),
              disease272, colorScale('disease272'),
              disease273, colorScale('disease273'),
              disease274, colorScale('disease274'),
              disease275, colorScale('disease275'),
              disease276, colorScale('disease276'),
              disease277, colorScale('disease277'),
              disease278, colorScale('disease278'),
              disease279, colorScale('disease279'),
              disease280, colorScale('disease280'),
              disease281, colorScale('disease281'),
              disease282, colorScale('disease282'),
              disease283, colorScale('disease283'),
              disease284, colorScale('disease284'),
              disease285, colorScale('disease285'),
              disease286, colorScale('disease286'),
              disease287, colorScale('disease287'),
              disease288, colorScale('disease288'),
              disease289, colorScale('disease289'),
              disease290, colorScale('disease290'),
              disease291, colorScale('disease291'),
              disease292, colorScale('disease292'),
              disease293, colorScale('disease293'),
              disease294, colorScale('disease294'),
              disease295, colorScale('disease295'),
              disease296, colorScale('disease296'),
              disease297, colorScale('disease297'),
              disease298, colorScale('disease298'),
              disease299, colorScale('disease299'),
              disease300, colorScale('disease300'),
              disease301, colorScale('disease301'),
              disease302, colorScale('disease302'),
              disease303, colorScale('disease303'),
              disease304, colorScale('disease304'),
              disease305, colorScale('disease305'),
              disease306, colorScale('disease306'),
              disease307, colorScale('disease307'),
              disease308, colorScale('disease308'),
              disease309, colorScale('disease309'),
              disease310, colorScale('disease310'),
              disease311, colorScale('disease311'),
              disease312, colorScale('disease312'),
              disease313, colorScale('disease313'),
              disease314, colorScale('disease314'),
              disease315, colorScale('disease315'),
              disease316, colorScale('disease316'),
              disease317, colorScale('disease317'),
              disease318, colorScale('disease318'),
              disease319, colorScale('disease319'),
              disease320, colorScale('disease320'),
              disease321, colorScale('disease321'),
              disease322, colorScale('disease322'),
              disease323, colorScale('disease323'),
              disease324, colorScale('disease324'),
              disease325, colorScale('disease325'),
              disease326, colorScale('disease326'),
              disease327, colorScale('disease327'),
              disease328, colorScale('disease328'),
              disease329, colorScale('disease329'),
              disease330, colorScale('disease330'),
              disease331, colorScale('disease331'),
              disease332, colorScale('disease332'),
              disease333, colorScale('disease333'),
              disease334, colorScale('disease334'),
              disease335, colorScale('disease335'),
              disease336, colorScale('disease336'),
              disease337, colorScale('disease337'),
              disease338, colorScale('disease338'),
              disease339, colorScale('disease339'),
              disease340, colorScale('disease340'),
              disease341, colorScale('disease341'),
              disease342, colorScale('disease342'),
              disease343, colorScale('disease343'),
              disease344, colorScale('disease344'),
              disease345, colorScale('disease345'),
              disease346, colorScale('disease346'),
              disease347, colorScale('disease347'),
              disease348, colorScale('disease348'),
              disease349, colorScale('disease349'),
              disease350, colorScale('disease350'),
              disease351, colorScale('disease351'),
              disease352, colorScale('disease352'),
              disease353, colorScale('disease353'),
              disease354, colorScale('disease354'),
              disease355, colorScale('disease355'),
              disease356, colorScale('disease356'),
              disease357, colorScale('disease357'),
              disease358, colorScale('disease358'),
              disease359, colorScale('disease359'),
              disease360, colorScale('disease360'),
              disease361, colorScale('disease361'),
              disease362, colorScale('disease362'),
              disease363, colorScale('disease363'),
              disease364, colorScale('disease364'),
              disease365, colorScale('disease365'),
              disease366, colorScale('disease366'),
              disease367, colorScale('disease367'),
              disease368, colorScale('disease368'),
              disease369, colorScale('disease369'),
              disease370, colorScale('disease370'),
              disease371, colorScale('disease371'),
              disease372, colorScale('disease372'),
              disease373, colorScale('disease373'),
              disease374, colorScale('disease374'),
              disease375, colorScale('disease375'),
              disease376, colorScale('disease376'),
              disease377, colorScale('disease377'),
              disease378, colorScale('disease378'),
              disease379, colorScale('disease379'),
              disease380, colorScale('disease380'),
              disease381, colorScale('disease381'),
              disease382, colorScale('disease382'),
              disease383, colorScale('disease383'),
              disease384, colorScale('disease384'),
              disease385, colorScale('disease385'),
              disease386, colorScale('disease386'),
              disease387, colorScale('disease387'),
              disease388, colorScale('disease388'),
              disease389, colorScale('disease389'),
              disease390, colorScale('disease390'),
              disease391, colorScale('disease391'),
              disease392, colorScale('disease392'),
              disease393, colorScale('disease393'),
              disease394, colorScale('disease394'),
              disease395, colorScale('disease395'),
              disease396, colorScale('disease396'),
              disease397, colorScale('disease397'),
              disease398, colorScale('disease398'),
              disease399, colorScale('disease399'),
              disease400, colorScale('disease400'),
              disease401, colorScale('disease401'),
              disease402, colorScale('disease402'),
              disease403, colorScale('disease403'),
              disease404, colorScale('disease404'),
              disease405, colorScale('disease405'),
              disease406, colorScale('disease406'),
              disease407, colorScale('disease407'),
              disease408, colorScale('disease408'),
              disease409, colorScale('disease409'),
              disease410, colorScale('disease410'),
              disease411, colorScale('disease411'),
              disease412, colorScale('disease412'),
              disease413, colorScale('disease413'),
              disease414, colorScale('disease414'),
              disease415, colorScale('disease415'),
              disease416, colorScale('disease416'),
              disease417, colorScale('disease417'),
              disease418, colorScale('disease418'),
              disease419, colorScale('disease419'),
              disease420, colorScale('disease420'),
              disease421, colorScale('disease421'),
              disease422, colorScale('disease422'),
              disease423, colorScale('disease423'),
              disease424, colorScale('disease424'),
              disease425, colorScale('disease425'),
              disease426, colorScale('disease426'),
              disease427, colorScale('disease427'),
              disease428, colorScale('disease428'),
              disease429, colorScale('disease429'),
              disease430, colorScale('disease430'),
              disease431, colorScale('disease431'),
              disease432, colorScale('disease432'),
              disease433, colorScale('disease433'),
              disease434, colorScale('disease434'),
              disease435, colorScale('disease435'),
              disease436, colorScale('disease436'),
              disease437, colorScale('disease437'),
              disease438, colorScale('disease438'),
              disease439, colorScale('disease439'),
              disease440, colorScale('disease440'),
              disease441, colorScale('disease441'),
              disease442, colorScale('disease442'),
              disease443, colorScale('disease443'),
              disease444, colorScale('disease444'),
              disease445, colorScale('disease445'),
              disease446, colorScale('disease446'),
              disease447, colorScale('disease447'),
              disease448, colorScale('disease448'),
              disease449, colorScale('disease449'),
              disease450, colorScale('disease450'),
              disease451, colorScale('disease451'),
              disease452, colorScale('disease452'),
              disease453, colorScale('disease453'),
              disease454, colorScale('disease454'),
              disease455, colorScale('disease455'),
              disease456, colorScale('disease456'),
              disease457, colorScale('disease457'),
              disease458, colorScale('disease458'),
              disease459, colorScale('disease459'),
              disease460, colorScale('disease460'),
              disease461, colorScale('disease461'),
              disease462, colorScale('disease462'),
              disease463, colorScale('disease463'),
              disease464, colorScale('disease464'),
              disease465, colorScale('disease465'),
              disease466, colorScale('disease466'),
              disease467, colorScale('disease467'),
              disease468, colorScale('disease468'),
              disease469, colorScale('disease469'),
              disease470, colorScale('disease470'),
              disease471, colorScale('disease471'),
              disease472, colorScale('disease472'),
              disease473, colorScale('disease473'),
              disease474, colorScale('disease474'),
              disease475, colorScale('disease475'),
              disease476, colorScale('disease476'),
              disease477, colorScale('disease477'),
              disease478, colorScale('disease478'),
              disease479, colorScale('disease479'),
              disease480, colorScale('disease480'),
              disease481, colorScale('disease481'),
              disease482, colorScale('disease482'),
              disease483, colorScale('disease483'),
              disease484, colorScale('disease484'),
              disease485, colorScale('disease485'),
              disease486, colorScale('disease486'),
              disease487, colorScale('disease487'),
              disease488, colorScale('disease488'),
              disease489, colorScale('disease489'),
              disease490, colorScale('disease490'),
              disease491, colorScale('disease491'),
              disease492, colorScale('disease492'),
              disease493, colorScale('disease493'),
              disease494, colorScale('disease494'),
              disease495, colorScale('disease495'),
              disease496, colorScale('disease496'),
              disease497, colorScale('disease497'), '#ffed6f'],
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
              {type: 'disease1', count: props.disease1},
              {type: 'disease2', count: props.disease2},
              {type: 'disease3', count: props.disease3},
              {type: 'disease4', count: props.disease4},
              {type: 'disease5', count: props.disease5},
              {type: 'disease6', count: props.disease6},
              {type: 'disease7', count: props.disease7},
              {type: 'disease8', count: props.disease8},
              {type: 'disease9', count: props.disease9},
              {type: 'disease10', count: props.disease10},
              {type: 'disease11', count: props.disease11},
              {type: 'disease12', count: props.disease12},
              {type: 'disease13', count: props.disease13},
              {type: 'disease14', count: props.disease14},
              {type: 'disease15', count: props.disease15},
              {type: 'disease16', count: props.disease16},
              {type: 'disease17', count: props.disease17},
              {type: 'disease18', count: props.disease18},
              {type: 'disease19', count: props.disease19},
              {type: 'disease20', count: props.disease20},
              {type: 'disease21', count: props.disease21},
              {type: 'disease22', count: props.disease22},
              {type: 'disease23', count: props.disease23},
              {type: 'disease24', count: props.disease24},
              {type: 'disease25', count: props.disease25},
              {type: 'disease26', count: props.disease26},
              {type: 'disease27', count: props.disease27},
              {type: 'disease28', count: props.disease28},
              {type: 'disease29', count: props.disease29},
              {type: 'disease30', count: props.disease30},
              {type: 'disease31', count: props.disease31},
              {type: 'disease32', count: props.disease32},
              {type: 'disease33', count: props.disease33},
              {type: 'disease34', count: props.disease34},
              {type: 'disease35', count: props.disease35},
              {type: 'disease36', count: props.disease36},
              {type: 'disease37', count: props.disease37},
              {type: 'disease38', count: props.disease38},
              {type: 'disease39', count: props.disease39},
              {type: 'disease40', count: props.disease40},
              {type: 'disease41', count: props.disease41},
              {type: 'disease42', count: props.disease42},
              {type: 'disease43', count: props.disease43},
              {type: 'disease44', count: props.disease44},
              {type: 'disease45', count: props.disease45},
              {type: 'disease46', count: props.disease46},
              {type: 'disease47', count: props.disease47},
              {type: 'disease48', count: props.disease48},
              {type: 'disease49', count: props.disease49},
              {type: 'disease50', count: props.disease50},
              {type: 'disease51', count: props.disease51},
              {type: 'disease52', count: props.disease52},
              {type: 'disease53', count: props.disease53},
              {type: 'disease54', count: props.disease54},
              {type: 'disease55', count: props.disease55},
              {type: 'disease56', count: props.disease56},
              {type: 'disease57', count: props.disease57},
              {type: 'disease58', count: props.disease58},
              {type: 'disease59', count: props.disease59},
              {type: 'disease60', count: props.disease60},
              {type: 'disease61', count: props.disease61},
              {type: 'disease62', count: props.disease62},
              {type: 'disease63', count: props.disease63},
              {type: 'disease64', count: props.disease64},
              {type: 'disease65', count: props.disease65},
              {type: 'disease66', count: props.disease66},
              {type: 'disease67', count: props.disease67},
              {type: 'disease68', count: props.disease68},
              {type: 'disease69', count: props.disease69},
              {type: 'disease70', count: props.disease70},
              {type: 'disease71', count: props.disease71},
              {type: 'disease72', count: props.disease72},
              {type: 'disease73', count: props.disease73},
              {type: 'disease74', count: props.disease74},
              {type: 'disease75', count: props.disease75},
              {type: 'disease76', count: props.disease76},
              {type: 'disease77', count: props.disease77},
              {type: 'disease78', count: props.disease78},
              {type: 'disease79', count: props.disease79},
              {type: 'disease80', count: props.disease80},
              {type: 'disease81', count: props.disease81},
              {type: 'disease82', count: props.disease82},
              {type: 'disease83', count: props.disease83},
              {type: 'disease84', count: props.disease84},
              {type: 'disease85', count: props.disease85},
              {type: 'disease86', count: props.disease86},
              {type: 'disease87', count: props.disease87},
              {type: 'disease88', count: props.disease88},
              {type: 'disease89', count: props.disease89},
              {type: 'disease90', count: props.disease90},
              {type: 'disease91', count: props.disease91},
              {type: 'disease92', count: props.disease92},
              {type: 'disease93', count: props.disease93},
              {type: 'disease94', count: props.disease94},
              {type: 'disease95', count: props.disease95},
              {type: 'disease96', count: props.disease96},
              {type: 'disease97', count: props.disease97},
              {type: 'disease98', count: props.disease98},
              {type: 'disease99', count: props.disease99},
              {type: 'disease100', count: props.disease100},
              {type: 'disease101', count: props.disease101},
              {type: 'disease102', count: props.disease102},
              {type: 'disease103', count: props.disease103},
              {type: 'disease104', count: props.disease104},
              {type: 'disease105', count: props.disease105},
              {type: 'disease106', count: props.disease106},
              {type: 'disease107', count: props.disease107},
              {type: 'disease108', count: props.disease108},
              {type: 'disease109', count: props.disease109},
              {type: 'disease110', count: props.disease110},
              {type: 'disease111', count: props.disease111},
              {type: 'disease112', count: props.disease112},
              {type: 'disease113', count: props.disease113},
              {type: 'disease114', count: props.disease114},
              {type: 'disease115', count: props.disease115},
              {type: 'disease116', count: props.disease116},
              {type: 'disease117', count: props.disease117},
              {type: 'disease118', count: props.disease118},
              {type: 'disease119', count: props.disease119},
              {type: 'disease120', count: props.disease120},
              {type: 'disease121', count: props.disease121},
              {type: 'disease122', count: props.disease122},
              {type: 'disease123', count: props.disease123},
              {type: 'disease124', count: props.disease124},
              {type: 'disease125', count: props.disease125},
              {type: 'disease126', count: props.disease126},
              {type: 'disease127', count: props.disease127},
              {type: 'disease128', count: props.disease128},
              {type: 'disease129', count: props.disease129},
              {type: 'disease130', count: props.disease130},
              {type: 'disease131', count: props.disease131},
              {type: 'disease132', count: props.disease132},
              {type: 'disease133', count: props.disease133},
              {type: 'disease134', count: props.disease134},
              {type: 'disease135', count: props.disease135},
              {type: 'disease136', count: props.disease136},
              {type: 'disease137', count: props.disease137},
              {type: 'disease138', count: props.disease138},
              {type: 'disease139', count: props.disease139},
              {type: 'disease140', count: props.disease140},
              {type: 'disease141', count: props.disease141},
              {type: 'disease142', count: props.disease142},
              {type: 'disease143', count: props.disease143},
              {type: 'disease144', count: props.disease144},
              {type: 'disease145', count: props.disease145},
              {type: 'disease146', count: props.disease146},
              {type: 'disease147', count: props.disease147},
              {type: 'disease148', count: props.disease148},
              {type: 'disease149', count: props.disease149},
              {type: 'disease150', count: props.disease150},
              {type: 'disease151', count: props.disease151},
              {type: 'disease152', count: props.disease152},
              {type: 'disease153', count: props.disease153},
              {type: 'disease154', count: props.disease154},
              {type: 'disease155', count: props.disease155},
              {type: 'disease156', count: props.disease156},
              {type: 'disease157', count: props.disease157},
              {type: 'disease158', count: props.disease158},
              {type: 'disease159', count: props.disease159},
              {type: 'disease160', count: props.disease160},
              {type: 'disease161', count: props.disease161},
              {type: 'disease162', count: props.disease162},
              {type: 'disease163', count: props.disease163},
              {type: 'disease164', count: props.disease164},
              {type: 'disease165', count: props.disease165},
              {type: 'disease166', count: props.disease166},
              {type: 'disease167', count: props.disease167},
              {type: 'disease168', count: props.disease168},
              {type: 'disease169', count: props.disease169},
              {type: 'disease170', count: props.disease170},
              {type: 'disease171', count: props.disease171},
              {type: 'disease172', count: props.disease172},
              {type: 'disease173', count: props.disease173},
              {type: 'disease174', count: props.disease174},
              {type: 'disease175', count: props.disease175},
              {type: 'disease176', count: props.disease176},
              {type: 'disease177', count: props.disease177},
              {type: 'disease178', count: props.disease178},
              {type: 'disease179', count: props.disease179},
              {type: 'disease180', count: props.disease180},
              {type: 'disease181', count: props.disease181},
              {type: 'disease182', count: props.disease182},
              {type: 'disease183', count: props.disease183},
              {type: 'disease184', count: props.disease184},
              {type: 'disease185', count: props.disease185},
              {type: 'disease186', count: props.disease186},
              {type: 'disease187', count: props.disease187},
              {type: 'disease188', count: props.disease188},
              {type: 'disease189', count: props.disease189},
              {type: 'disease190', count: props.disease190},
              {type: 'disease191', count: props.disease191},
              {type: 'disease192', count: props.disease192},
              {type: 'disease193', count: props.disease193},
              {type: 'disease194', count: props.disease194},
              {type: 'disease195', count: props.disease195},
              {type: 'disease196', count: props.disease196},
              {type: 'disease197', count: props.disease197},
              {type: 'disease198', count: props.disease198},
              {type: 'disease199', count: props.disease199},
              {type: 'disease200', count: props.disease200},
              {type: 'disease201', count: props.disease201},
              {type: 'disease202', count: props.disease202},
              {type: 'disease203', count: props.disease203},
              {type: 'disease204', count: props.disease204},
              {type: 'disease205', count: props.disease205},
              {type: 'disease206', count: props.disease206},
              {type: 'disease207', count: props.disease207},
              {type: 'disease208', count: props.disease208},
              {type: 'disease209', count: props.disease209},
              {type: 'disease210', count: props.disease210},
              {type: 'disease211', count: props.disease211},
              {type: 'disease212', count: props.disease212},
              {type: 'disease213', count: props.disease213},
              {type: 'disease214', count: props.disease214},
              {type: 'disease215', count: props.disease215},
              {type: 'disease216', count: props.disease216},
              {type: 'disease217', count: props.disease217},
              {type: 'disease218', count: props.disease218},
              {type: 'disease219', count: props.disease219},
              {type: 'disease220', count: props.disease220},
              {type: 'disease221', count: props.disease221},
              {type: 'disease222', count: props.disease222},
              {type: 'disease223', count: props.disease223},
              {type: 'disease224', count: props.disease224},
              {type: 'disease225', count: props.disease225},
              {type: 'disease226', count: props.disease226},
              {type: 'disease227', count: props.disease227},
              {type: 'disease228', count: props.disease228},
              {type: 'disease229', count: props.disease229},
              {type: 'disease230', count: props.disease230},
              {type: 'disease231', count: props.disease231},
              {type: 'disease232', count: props.disease232},
              {type: 'disease233', count: props.disease233},
              {type: 'disease234', count: props.disease234},
              {type: 'disease235', count: props.disease235},
              {type: 'disease236', count: props.disease236},
              {type: 'disease237', count: props.disease237},
              {type: 'disease238', count: props.disease238},
              {type: 'disease239', count: props.disease239},
              {type: 'disease240', count: props.disease240},
              {type: 'disease241', count: props.disease241},
              {type: 'disease242', count: props.disease242},
              {type: 'disease243', count: props.disease243},
              {type: 'disease244', count: props.disease244},
              {type: 'disease245', count: props.disease245},
              {type: 'disease246', count: props.disease246},
              {type: 'disease247', count: props.disease247},
              {type: 'disease248', count: props.disease248},
              {type: 'disease249', count: props.disease249},
              {type: 'disease250', count: props.disease250},
              {type: 'disease251', count: props.disease251},
              {type: 'disease252', count: props.disease252},
              {type: 'disease253', count: props.disease253},
              {type: 'disease254', count: props.disease254},
              {type: 'disease255', count: props.disease255},
              {type: 'disease256', count: props.disease256},
              {type: 'disease257', count: props.disease257},
              {type: 'disease258', count: props.disease258},
              {type: 'disease259', count: props.disease259},
              {type: 'disease260', count: props.disease260},
              {type: 'disease261', count: props.disease261},
              {type: 'disease262', count: props.disease262},
              {type: 'disease263', count: props.disease263},
              {type: 'disease264', count: props.disease264},
              {type: 'disease265', count: props.disease265},
              {type: 'disease266', count: props.disease266},
              {type: 'disease267', count: props.disease267},
              {type: 'disease268', count: props.disease268},
              {type: 'disease269', count: props.disease269},
              {type: 'disease270', count: props.disease270},
              {type: 'disease271', count: props.disease271},
              {type: 'disease272', count: props.disease272},
              {type: 'disease273', count: props.disease273},
              {type: 'disease274', count: props.disease274},
              {type: 'disease275', count: props.disease275},
              {type: 'disease276', count: props.disease276},
              {type: 'disease277', count: props.disease277},
              {type: 'disease278', count: props.disease278},
              {type: 'disease279', count: props.disease279},
              {type: 'disease280', count: props.disease280},
              {type: 'disease281', count: props.disease281},
              {type: 'disease282', count: props.disease282},
              {type: 'disease283', count: props.disease283},
              {type: 'disease284', count: props.disease284},
              {type: 'disease285', count: props.disease285},
              {type: 'disease286', count: props.disease286},
              {type: 'disease287', count: props.disease287},
              {type: 'disease288', count: props.disease288},
              {type: 'disease289', count: props.disease289},
              {type: 'disease290', count: props.disease290},
              {type: 'disease291', count: props.disease291},
              {type: 'disease292', count: props.disease292},
              {type: 'disease293', count: props.disease293},
              {type: 'disease294', count: props.disease294},
              {type: 'disease295', count: props.disease295},
              {type: 'disease296', count: props.disease296},
              {type: 'disease297', count: props.disease297},
              {type: 'disease298', count: props.disease298},
              {type: 'disease299', count: props.disease299},
              {type: 'disease300', count: props.disease300},
              {type: 'disease301', count: props.disease301},
              {type: 'disease302', count: props.disease302},
              {type: 'disease303', count: props.disease303},
              {type: 'disease304', count: props.disease304},
              {type: 'disease305', count: props.disease305},
              {type: 'disease306', count: props.disease306},
              {type: 'disease307', count: props.disease307},
              {type: 'disease308', count: props.disease308},
              {type: 'disease309', count: props.disease309},
              {type: 'disease310', count: props.disease310},
              {type: 'disease311', count: props.disease311},
              {type: 'disease312', count: props.disease312},
              {type: 'disease313', count: props.disease313},
              {type: 'disease314', count: props.disease314},
              {type: 'disease315', count: props.disease315},
              {type: 'disease316', count: props.disease316},
              {type: 'disease317', count: props.disease317},
              {type: 'disease318', count: props.disease318},
              {type: 'disease319', count: props.disease319},
              {type: 'disease320', count: props.disease320},
              {type: 'disease321', count: props.disease321},
              {type: 'disease322', count: props.disease322},
              {type: 'disease323', count: props.disease323},
              {type: 'disease324', count: props.disease324},
              {type: 'disease325', count: props.disease325},
              {type: 'disease326', count: props.disease326},
              {type: 'disease327', count: props.disease327},
              {type: 'disease328', count: props.disease328},
              {type: 'disease329', count: props.disease329},
              {type: 'disease330', count: props.disease330},
              {type: 'disease331', count: props.disease331},
              {type: 'disease332', count: props.disease332},
              {type: 'disease333', count: props.disease333},
              {type: 'disease334', count: props.disease334},
              {type: 'disease335', count: props.disease335},
              {type: 'disease336', count: props.disease336},
              {type: 'disease337', count: props.disease337},
              {type: 'disease338', count: props.disease338},
              {type: 'disease339', count: props.disease339},
              {type: 'disease340', count: props.disease340},
              {type: 'disease341', count: props.disease341},
              {type: 'disease342', count: props.disease342},
              {type: 'disease343', count: props.disease343},
              {type: 'disease344', count: props.disease344},
              {type: 'disease345', count: props.disease345},
              {type: 'disease346', count: props.disease346},
              {type: 'disease347', count: props.disease347},
              {type: 'disease348', count: props.disease348},
              {type: 'disease349', count: props.disease349},
              {type: 'disease350', count: props.disease350},
              {type: 'disease351', count: props.disease351},
              {type: 'disease352', count: props.disease352},
              {type: 'disease353', count: props.disease353},
              {type: 'disease354', count: props.disease354},
              {type: 'disease355', count: props.disease355},
              {type: 'disease356', count: props.disease356},
              {type: 'disease357', count: props.disease357},
              {type: 'disease358', count: props.disease358},
              {type: 'disease359', count: props.disease359},
              {type: 'disease360', count: props.disease360},
              {type: 'disease361', count: props.disease361},
              {type: 'disease362', count: props.disease362},
              {type: 'disease363', count: props.disease363},
              {type: 'disease364', count: props.disease364},
              {type: 'disease365', count: props.disease365},
              {type: 'disease366', count: props.disease366},
              {type: 'disease367', count: props.disease367},
              {type: 'disease368', count: props.disease368},
              {type: 'disease369', count: props.disease369},
              {type: 'disease370', count: props.disease370},
              {type: 'disease371', count: props.disease371},
              {type: 'disease372', count: props.disease372},
              {type: 'disease373', count: props.disease373},
              {type: 'disease374', count: props.disease374},
              {type: 'disease375', count: props.disease375},
              {type: 'disease376', count: props.disease376},
              {type: 'disease377', count: props.disease377},
              {type: 'disease378', count: props.disease378},
              {type: 'disease379', count: props.disease379},
              {type: 'disease380', count: props.disease380},
              {type: 'disease381', count: props.disease381},
              {type: 'disease382', count: props.disease382},
              {type: 'disease383', count: props.disease383},
              {type: 'disease384', count: props.disease384},
              {type: 'disease385', count: props.disease385},
              {type: 'disease386', count: props.disease386},
              {type: 'disease387', count: props.disease387},
              {type: 'disease388', count: props.disease388},
              {type: 'disease389', count: props.disease389},
              {type: 'disease390', count: props.disease390},
              {type: 'disease391', count: props.disease391},
              {type: 'disease392', count: props.disease392},
              {type: 'disease393', count: props.disease393},
              {type: 'disease394', count: props.disease394},
              {type: 'disease395', count: props.disease395},
              {type: 'disease396', count: props.disease396},
              {type: 'disease397', count: props.disease397},
              {type: 'disease398', count: props.disease398},
              {type: 'disease399', count: props.disease399},
              {type: 'disease400', count: props.disease400},
              {type: 'disease401', count: props.disease401},
              {type: 'disease402', count: props.disease402},
              {type: 'disease403', count: props.disease403},
              {type: 'disease404', count: props.disease404},
              {type: 'disease405', count: props.disease405},
              {type: 'disease406', count: props.disease406},
              {type: 'disease407', count: props.disease407},
              {type: 'disease408', count: props.disease408},
              {type: 'disease409', count: props.disease409},
              {type: 'disease410', count: props.disease410},
              {type: 'disease411', count: props.disease411},
              {type: 'disease412', count: props.disease412},
              {type: 'disease413', count: props.disease413},
              {type: 'disease414', count: props.disease414},
              {type: 'disease415', count: props.disease415},
              {type: 'disease416', count: props.disease416},
              {type: 'disease417', count: props.disease417},
              {type: 'disease418', count: props.disease418},
              {type: 'disease419', count: props.disease419},
              {type: 'disease420', count: props.disease420},
              {type: 'disease421', count: props.disease421},
              {type: 'disease422', count: props.disease422},
              {type: 'disease423', count: props.disease423},
              {type: 'disease424', count: props.disease424},
              {type: 'disease425', count: props.disease425},
              {type: 'disease426', count: props.disease426},
              {type: 'disease427', count: props.disease427},
              {type: 'disease428', count: props.disease428},
              {type: 'disease429', count: props.disease429},
              {type: 'disease430', count: props.disease430},
              {type: 'disease431', count: props.disease431},
              {type: 'disease432', count: props.disease432},
              {type: 'disease433', count: props.disease433},
              {type: 'disease434', count: props.disease434},
              {type: 'disease435', count: props.disease435},
              {type: 'disease436', count: props.disease436},
              {type: 'disease437', count: props.disease437},
              {type: 'disease438', count: props.disease438},
              {type: 'disease439', count: props.disease439},
              {type: 'disease440', count: props.disease440},
              {type: 'disease441', count: props.disease441},
              {type: 'disease442', count: props.disease442},
              {type: 'disease443', count: props.disease443},
              {type: 'disease444', count: props.disease444},
              {type: 'disease445', count: props.disease445},
              {type: 'disease446', count: props.disease446},
              {type: 'disease447', count: props.disease447},
              {type: 'disease448', count: props.disease448},
              {type: 'disease449', count: props.disease449},
              {type: 'disease450', count: props.disease450},
              {type: 'disease451', count: props.disease451},
              {type: 'disease452', count: props.disease452},
              {type: 'disease453', count: props.disease453},
              {type: 'disease454', count: props.disease454},
              {type: 'disease455', count: props.disease455},
              {type: 'disease456', count: props.disease456},
              {type: 'disease457', count: props.disease457},
              {type: 'disease458', count: props.disease458},
              {type: 'disease459', count: props.disease459},
              {type: 'disease460', count: props.disease460},
              {type: 'disease461', count: props.disease461},
              {type: 'disease462', count: props.disease462},
              {type: 'disease463', count: props.disease463},
              {type: 'disease464', count: props.disease464},
              {type: 'disease465', count: props.disease465},
              {type: 'disease466', count: props.disease466},
              {type: 'disease467', count: props.disease467},
              {type: 'disease468', count: props.disease468},
              {type: 'disease469', count: props.disease469},
              {type: 'disease470', count: props.disease470},
              {type: 'disease471', count: props.disease471},
              {type: 'disease472', count: props.disease472},
              {type: 'disease473', count: props.disease473},
              {type: 'disease474', count: props.disease474},
              {type: 'disease475', count: props.disease475},
              {type: 'disease476', count: props.disease476},
              {type: 'disease477', count: props.disease477},
              {type: 'disease478', count: props.disease478},
              {type: 'disease479', count: props.disease479},
              {type: 'disease480', count: props.disease480},
              {type: 'disease481', count: props.disease481},
              {type: 'disease482', count: props.disease482},
              {type: 'disease483', count: props.disease483},
              {type: 'disease484', count: props.disease484},
              {type: 'disease485', count: props.disease485},
              {type: 'disease486', count: props.disease486},
              {type: 'disease487', count: props.disease487},
              {type: 'disease488', count: props.disease488},
              {type: 'disease489', count: props.disease489},
              {type: 'disease490', count: props.disease490},
              {type: 'disease491', count: props.disease491},
              {type: 'disease492', count: props.disease492},
              {type: 'disease493', count: props.disease493},
              {type: 'disease494', count: props.disease494},
              {type: 'disease495', count: props.disease495},
              {type: 'disease496', count: props.disease496},
              {type: 'disease497', count: props.disease497},
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
          /*
          var i;
          var perc_arr=[];
          for (i = 1; i <= disease_array.length; i++) {
              perc_arr.push( '{type "'+disease_array[i-1]+'", perc: getPerc(props.disease'+i+')},' );
          }
          console.log(perc_arr);
          */
          const createTable = (props) => {
            const getPerc = (count) => {
              return count/props.point_count;
            };
            const data = [
              {type: "Abdominal Pain", perc: getPerc(props.disease1)},
              {type: "Alcohol Abuse and Alcoholism", perc: getPerc(props.disease2)},
              {type: "Anxiety", perc: getPerc(props.disease3)},
              {type: "Appendicitis", perc: getPerc(props.disease4)},
              {type: "Autism", perc: getPerc(props.disease5)},
              {type: "Acquired Immuno Deficiency Syndrome", perc: getPerc(props.disease6)},
              {type: "Alzheimer's Disease", perc: getPerc(props.disease7)},
              {type: "Anaemia", perc: getPerc(props.disease8)},
              {type: "Arthritis", perc: getPerc(props.disease9)},
              {type: "Asthma", perc: getPerc(props.disease10)},
              {type: "Airbag Eye Injury", perc: getPerc(props.disease11)},
              {type: "Atherosclerosis", perc: getPerc(props.disease12)},
              {type: "Astigmatism", perc: getPerc(props.disease13)},
              {type: "Aphakia", perc: getPerc(props.disease14)},
              {type: "Anisometropia", perc: getPerc(props.disease15)},
              {type: "Aniseikonia", perc: getPerc(props.disease16)},
              {type: "Asbestos-related diseases", perc: getPerc(props.disease17)},
              {type: "Amblyopia", perc: getPerc(props.disease18)},
              {type: "Ankyloblepharon", perc: getPerc(props.disease19)},
              {type: "Abnormal uterine bleeding", perc: getPerc(props.disease20)},
              {type: "Antepartum hemorrhage (Bleeding in late pregnancy)", perc: getPerc(props.disease21)},
              {type: "Abducens nerve Palsy", perc: getPerc(props.disease22)},
              {type: "Breast Cancer / Carcinoma", perc: getPerc(props.disease23)},
              {type: "Bronchitis", perc: getPerc(props.disease24)},
              {type: "Bedsores", perc: getPerc(props.disease25)},
              {type: "Back Pain", perc: getPerc(props.disease26)},
              {type: "Bell's Palsy", perc: getPerc(props.disease27)},
              {type: "Brain Tumour", perc: getPerc(props.disease28)},
              {type: "Benign Essential Blepharospasm", perc: getPerc(props.disease29)},
              {type: "Band Shaped Keratopathy", perc: getPerc(props.disease30)},
              {type: "Burns", perc: getPerc(props.disease31)},
              {type: "Blepharochalasis", perc: getPerc(props.disease32)},
              {type: "Bruxism (Teeth Grinding)", perc: getPerc(props.disease33)},
              {type: "Cancer", perc: getPerc(props.disease34)},
              {type: "Carpal Tunnel Syndrome", perc: getPerc(props.disease35)},
              {type: "Chickenpox", perc: getPerc(props.disease36)},
              {type: "Chikungunya Fever", perc: getPerc(props.disease37)},
              {type: "Cholera", perc: getPerc(props.disease38)},
              {type: "Coronary Heart Disease", perc: getPerc(props.disease39)},
              {type: "Chronic obstructive pulmonary disease (COPD)", perc: getPerc(props.disease40)},
              {type: "Conjunctivochalasis", perc: getPerc(props.disease41)},
              {type: "Conjunctival Concretions", perc: getPerc(props.disease42)},
              {type: "Corona(covid-19)", perc: getPerc(props.disease43)},
              {type: "Cervical cancer", perc: getPerc(props.disease44)},
              {type: "Colorectal Cancer", perc: getPerc(props.disease45)},
              {type: "Chemical Injuries to the Eyes", perc: getPerc(props.disease46)},
              {type: "Computer Vision Syndrome", perc: getPerc(props.disease47)},
              {type: "Child maltreatment (child abuse)", perc: getPerc(props.disease48)},
              {type: "Congenital Capillary Haemangioma of Eyelid", perc: getPerc(props.disease49)},
              {type: "Corneal Abrasion", perc: getPerc(props.disease50)},
              {type: "Chalcosis", perc: getPerc(props.disease51)},
              {type: "Commotio Retinae", perc: getPerc(props.disease52)},
              {type: "Cavities", perc: getPerc(props.disease53)},
              {type: "Cleft Lip and Cleft Palate", perc: getPerc(props.disease54)},
              {type: "Diarrhea", perc: getPerc(props.disease55)},
              {type: "Deafness", perc: getPerc(props.disease56)},
              {type: "Dementia", perc: getPerc(props.disease57)},
              {type: "Diabetes Mellitus", perc: getPerc(props.disease58)},
              {type: "Down's Syndrome", perc: getPerc(props.disease59)},
              {type: "Dracunculiasis (guinea-worm disease)", perc: getPerc(props.disease60)},
              {type: "Disabilities", perc: getPerc(props.disease61)},
              {type: "Dermatochalasis", perc: getPerc(props.disease62)},
              {type: "Distichiasis", perc: getPerc(props.disease63)},
              {type: "Double Elevator Palsy", perc: getPerc(props.disease64)},
              {type: "Digit-Sucking (Thumb/ Finger-Sucking)", perc: getPerc(props.disease65)},
              {type: "Eczema", perc: getPerc(props.disease66)},
              {type: "Endometriosis", perc: getPerc(props.disease67)},
              {type: "Epilepsy", perc: getPerc(props.disease68)},
              {type: "Epidemic dropsy", perc: getPerc(props.disease69)},
              {type: "Epiblepharon", perc: getPerc(props.disease70)},
              {type: "Epicanthus", perc: getPerc(props.disease71)},
              {type: "Euryblepharon", perc: getPerc(props.disease72)},
              {type: "Ectopic pregnancy", perc: getPerc(props.disease73)},
              {type: "Exposure Keratopathy", perc: getPerc(props.disease74)},
              {type: "Eyelid Varix", perc: getPerc(props.disease75)},
              {type: "Early pregnancy loss", perc: getPerc(props.disease76)},
              {type: "Eclampsia", perc: getPerc(props.disease77)},
              {type: "Fracture (Bone fracture)", perc: getPerc(props.disease78)},
              {type: "Fibroids", perc: getPerc(props.disease79)},
              {type: "Food Poisoning", perc: getPerc(props.disease80)},
              {type: "Filamentary Keratitis", perc: getPerc(props.disease81)},
              {type: "Fluorosis", perc: getPerc(props.disease82)},
              {type: "Floppy Eyelid Syndrome", perc: getPerc(props.disease83)},
              {type: "Factitious Keratoconjunctivitis", perc: getPerc(props.disease84)},
              {type: "Fibromyalgia", perc: getPerc(props.disease85)},
              {type: "Female genital mutilation", perc: getPerc(props.disease86)},
              {type: "Gastro-Esophageal Reflux Disease (GERD)", perc: getPerc(props.disease87)},
              {type: "Goitre", perc: getPerc(props.disease88)},
              {type: "Gonorrhea", perc: getPerc(props.disease89)},
              {type: "Guillain-BarrÃ© syndrome", perc: getPerc(props.disease90)},
              {type: "Gaming disorder", perc: getPerc(props.disease91)},
              {type: "Gum disease", perc: getPerc(props.disease92)},
              {type: "Hepatitis", perc: getPerc(props.disease93)},
              {type: "Herpes Simplex", perc: getPerc(props.disease94)},
              {type: "Haemophilia", perc: getPerc(props.disease95)},
              {type: "Hemangioma", perc: getPerc(props.disease96)},
              {type: "Helminthiasis (Soil-transmitted helminth infections)", perc: getPerc(props.disease97)},
              {type: "Human papillomavirus (HPV) infection and cervical cancer", perc: getPerc(props.disease98)},
              {type: "Heat-Related Illnesses and Heat waves", perc: getPerc(props.disease99)},
              {type: "Hand, Foot and Mouth Disease", perc: getPerc(props.disease100)},
              {type: "Hypermetropia", perc: getPerc(props.disease101)},
              {type: "Hypervitaminosis A", perc: getPerc(props.disease102)},
              {type: "Ichthyosis", perc: getPerc(props.disease103)},
              {type: "Inflammatory Bowel Disease", perc: getPerc(props.disease104)},
              {type: "Insomnia", perc: getPerc(props.disease105)},
              {type: "Iron Deficiency Anemia", perc: getPerc(props.disease106)},
              {type: "Infertility", perc: getPerc(props.disease107)},
              {type: "Intrauterine growth restriction (IUGR)", perc: getPerc(props.disease108)},
              {type: "Japanese Encephalitis", perc: getPerc(props.disease109)},
              {type: "Jaundice", perc: getPerc(props.disease110)},
              {type: "Kala-azar/ Leishmaniasis", perc: getPerc(props.disease111)},
              {type: "Kyasanur forest disease", perc: getPerc(props.disease112)},
              {type: "Keratoconus", perc: getPerc(props.disease113)},
              {type: "Keratoglobus", perc: getPerc(props.disease114)},
              {type: "Lichen Planus", perc: getPerc(props.disease115)},
              {type: "Leprosy", perc: getPerc(props.disease116)},
              {type: "Leukemia", perc: getPerc(props.disease117)},
              {type: "Lymphoedema", perc: getPerc(props.disease118)},
              {type: "Ligneous Conjunctivitis", perc: getPerc(props.disease119)},
              {type: "Low Vision and VisuaI Aids", perc: getPerc(props.disease120)},
              {type: "Lid Imbrication Syndrome", perc: getPerc(props.disease121)},
              {type: "Lagophthalmos", perc: getPerc(props.disease122)},
              {type: "Lead poisoning", perc: getPerc(props.disease123)},
              {type: "lactose intolerance", perc: getPerc(props.disease124)},
              {type: "Measles(Khasra)", perc: getPerc(props.disease125)},
              {type: "Malaria", perc: getPerc(props.disease126)},
              {type: "Meningitis", perc: getPerc(props.disease127)},
              {type: "Migraine", perc: getPerc(props.disease128)},
              {type: "Myocardial Infarction (Heart Attack)", perc: getPerc(props.disease129)},
              {type: "Microcephaly", perc: getPerc(props.disease130)},
              {type: "Mooren's Ulcer", perc: getPerc(props.disease131)},
              {type: "Myopia", perc: getPerc(props.disease132)},
              {type: "Mastitis", perc: getPerc(props.disease133)},
              {type: "Mouth Breathing", perc: getPerc(props.disease134)},
              {type: "Narcolepsy", perc: getPerc(props.disease135)},
              {type: "Nasal Polyps", perc: getPerc(props.disease136)},
              {type: "Neonatal Respiratory Disease Syndrome(NRDS)", perc: getPerc(props.disease137)},
              {type: "Neuralgia", perc: getPerc(props.disease138)},
              {type: "Nipah virus infection", perc: getPerc(props.disease139)},
              {type: "Neurotrophic Keratopathy", perc: getPerc(props.disease140)},
              {type: "Nausea and Vomiting of Pregnancy and Hyperemesis gravidarum", perc: getPerc(props.disease141)},
              {type: "Obsessive Compulsive Disorder", perc: getPerc(props.disease142)},
              {type: "Oral Cancer", perc: getPerc(props.disease143)},
              {type: "Osteomyelitis", perc: getPerc(props.disease144)},
              {type: "Osteoporosis", perc: getPerc(props.disease145)},
              {type: "Otitis Media", perc: getPerc(props.disease146)},
              {type: "Ocular Graft-versus-host Disease", perc: getPerc(props.disease147)},
              {type: "Obesity", perc: getPerc(props.disease148)},
              {type: "Orbital Varix", perc: getPerc(props.disease149)},
              {type: "Orbital Cavernous Haemangioma", perc: getPerc(props.disease150)},
              {type: "Orbital Solitary Fibrous Tumour", perc: getPerc(props.disease151)},
              {type: "Orbital Haemangiopericytoma", perc: getPerc(props.disease152)},
              {type: "Orbital Lymphangioma", perc: getPerc(props.disease153)},
              {type: "Parkinson's Disease", perc: getPerc(props.disease154)},
              {type: "Pericarditis", perc: getPerc(props.disease155)},
              {type: "Pneumonia", perc: getPerc(props.disease156)},
              {type: "Poliomyelitis", perc: getPerc(props.disease157)},
              {type: "Polycystic ovary syndrome (PCOS)", perc: getPerc(props.disease158)},
              {type: "Phlyctenular Keratoconjunctivitis", perc: getPerc(props.disease159)},
              {type: "Plague", perc: getPerc(props.disease160)},
              {type: "Pinguecula", perc: getPerc(props.disease161)},
              {type: "Preterm birth", perc: getPerc(props.disease162)},
              {type: "Preeclampsia", perc: getPerc(props.disease163)},
              {type: "Pellucid Marginal Degeneration", perc: getPerc(props.disease164)},
              {type: "Presbyopia", perc: getPerc(props.disease165)},
              {type: "Premenstrual syndrome", perc: getPerc(props.disease166)},
              {type: "Pseudophakia", perc: getPerc(props.disease167)},
              {type: "Puerperal sepsis", perc: getPerc(props.disease168)},
              {type: "Postpartum haemorrhage", perc: getPerc(props.disease169)},
              {type: "Photophthalmia", perc: getPerc(props.disease170)},
              {type: "Post-herpetic neuralgia", perc: getPerc(props.disease171)},
              {type: "Postpartum depression/ Perinatal depression", perc: getPerc(props.disease172)},
              {type: "Q Fever", perc: getPerc(props.disease173)},
              {type: "Quinsy", perc: getPerc(props.disease174)},
              {type: "Rabies", perc: getPerc(props.disease175)},
              {type: "Raynaud's Phenomenon", perc: getPerc(props.disease176)},
              {type: "Rubella", perc: getPerc(props.disease177)},
              {type: "Recurrent Corneal Erosion Syndrome", perc: getPerc(props.disease178)},
              {type: "Rheumatic fever and rheumatic heart disease", perc: getPerc(props.disease179)},
              {type: "Ramsay-Hunt Syndrome", perc: getPerc(props.disease180)},
              {type: "Sarcoidosis", perc: getPerc(props.disease181)},
              {type: "Sarcoma", perc: getPerc(props.disease182)},
              {type: "Severe Acute Respiratory Syndrome (SARS)", perc: getPerc(props.disease183)},
              {type: "Swine Flu", perc: getPerc(props.disease184)},
              {type: "Syphilis", perc: getPerc(props.disease185)},
              {type: "Superior Limbic Keratoconjunctivitis", perc: getPerc(props.disease186)},
              {type: "Stroke", perc: getPerc(props.disease187)},
              {type: "Sexually transmitted infections (STIs)", perc: getPerc(props.disease188)},
              {type: "Spheroidal Degeneration", perc: getPerc(props.disease189)},
              {type: "Salzmann's Nodular Degeneration", perc: getPerc(props.disease190)},
              {type: "Substance abuse", perc: getPerc(props.disease191)},
              {type: "Scabies", perc: getPerc(props.disease192)},
              {type: "Solar Retinopathy", perc: getPerc(props.disease193)},
              {type: "Silicosis", perc: getPerc(props.disease194)},
              {type: "Siderosis Bulbi", perc: getPerc(props.disease195)},
              {type: "Tetanus", perc: getPerc(props.disease196)},
              {type: "Thalassaemia", perc: getPerc(props.disease197)},
              {type: "Tuberculosis", perc: getPerc(props.disease198)},
              {type: "Turners Syndrome", perc: getPerc(props.disease199)},
              {type: "Toxic Keratoconjunctivitis", perc: getPerc(props.disease200)},
              {type: "Thermal Injuries to the Eye", perc: getPerc(props.disease201)},
              {type: "Terrien's Marginal Degeneration", perc: getPerc(props.disease202)},
              {type: "Typhoid / Enteric Fever", perc: getPerc(props.disease203)},
              {type: "Traumatic Hyphaema", perc: getPerc(props.disease204)},
              {type: "Trochlear Nerve Palsy", perc: getPerc(props.disease205)},
              {type: "Ulcerative Colitis", perc: getPerc(props.disease206)},
              {type: "Urticaria", perc: getPerc(props.disease207)},
              {type: "Varicose Veins", perc: getPerc(props.disease208)},
              {type: "Vitamin B12 Deficiency", perc: getPerc(props.disease209)},
              {type: "Whooping Cough/Pertussis", perc: getPerc(props.disease210)},
              {type: "Welding-arc Maculopathy", perc: getPerc(props.disease211)},
              {type: "Xerophthalmia", perc: getPerc(props.disease212)},
              {type: "Yellow Fever", perc: getPerc(props.disease213)},
              {type: "Abdominal aortic aneurysm", perc: getPerc(props.disease214)},
              {type: "Abscess", perc: getPerc(props.disease215)},
              {type: "Achalasia", perc: getPerc(props.disease216)},
              {type: "Reflux in babies", perc: getPerc(props.disease217)},
              {type: "Acne", perc: getPerc(props.disease218)},
              {type: "Acoustic neuroma (vestibular schwannoma)", perc: getPerc(props.disease219)},
              {type: "Acromegaly", perc: getPerc(props.disease220)},
              {type: "Actinic keratoses (solar keratoses)", perc: getPerc(props.disease221)},
              {type: "Acute cholecystitis", perc: getPerc(props.disease222)},
              {type: "Acute kidney injury", perc: getPerc(props.disease223)},
              {type: "Acute myeloid leukaemia", perc: getPerc(props.disease224)},
              {type: "Acute pancreatitis", perc: getPerc(props.disease225)},
              {type: "Acute respiratory distress syndrome", perc: getPerc(props.disease226)},
              {type: "Addison's disease", perc: getPerc(props.disease227)},
              {type: "Air or gas embolism", perc: getPerc(props.disease228)},
              {type: "Albinism", perc: getPerc(props.disease229)},
              {type: "Alcohol-related liver disease", perc: getPerc(props.disease230)},
              {type: "Altitude sickness", perc: getPerc(props.disease231)},
              {type: "Amyloidosis", perc: getPerc(props.disease232)},
              {type: "Iron deficiency anaemia", perc: getPerc(props.disease233)},
              {type: "Vitamin B12 or folate deficiency anaemia", perc: getPerc(props.disease234)},
              {type: "Anal cancer", perc: getPerc(props.disease235)},
              {type: "Anal fistula", perc: getPerc(props.disease236)},
              {type: "Anal pain", perc: getPerc(props.disease237)},
              {type: "Anaphylaxis", perc: getPerc(props.disease238)},
              {type: "Brain aneurysm", perc: getPerc(props.disease239)},
              {type: "Angina", perc: getPerc(props.disease240)},
              {type: "Angioedema", perc: getPerc(props.disease241)},
              {type: "Ankylosing spondylitis", perc: getPerc(props.disease242)},
              {type: "Generalised anxiety disorder in adults", perc: getPerc(props.disease243)},
              {type: "Anxiety disorders in children", perc: getPerc(props.disease244)},
              {type: "Aphasia", perc: getPerc(props.disease245)},
              {type: "Arterial thrombosis", perc: getPerc(props.disease246)},
              {type: "Auditory processing disorder", perc: getPerc(props.disease247)},
              {type: "Balanitis", perc: getPerc(props.disease248)},
              {type: "Behçet's disease", perc: getPerc(props.disease249)},
              {type: "Benign prostate enlargement", perc: getPerc(props.disease250)},
              {type: "Bile duct cancer (cholangiocarcinoma)", perc: getPerc(props.disease251)},
              {type: "Binge eating disorder", perc: getPerc(props.disease252)},
              {type: "Bipolar disorder", perc: getPerc(props.disease253)},
              {type: "Blepharitis", perc: getPerc(props.disease254)},
              {type: "Body dysmorphic disorder (BDD)", perc: getPerc(props.disease255)},
              {type: "Boils and carbuncles", perc: getPerc(props.disease256)},
              {type: "Borderline personality disorder", perc: getPerc(props.disease257)},
              {type: "Bornholm disease", perc: getPerc(props.disease258)},
              {type: "Botulism", perc: getPerc(props.disease259)},
              {type: "Bowel cancer", perc: getPerc(props.disease260)},
              {type: "Bowel polyps", perc: getPerc(props.disease261)},
              {type: "Brain abscess", perc: getPerc(props.disease262)},
              {type: "Subarachnoid haemorrhage", perc: getPerc(props.disease263)},
              {type: "Malignant brain tumour (brain cancer)", perc: getPerc(props.disease264)},
              {type: "Breast cancer in men", perc: getPerc(props.disease265)},
              {type: "Breast cancer in women", perc: getPerc(props.disease266)},
              {type: "Breast pain", perc: getPerc(props.disease267)},
              {type: "Broken arm or wrist", perc: getPerc(props.disease268)},
              {type: "Broken nose", perc: getPerc(props.disease269)},
              {type: "Broken or bruised ribs", perc: getPerc(props.disease270)},
              {type: "Brugada syndrome", perc: getPerc(props.disease271)},
              {type: "Teeth grinding (bruxism)", perc: getPerc(props.disease272)},
              {type: "Bulimia", perc: getPerc(props.disease273)},
              {type: "Carbon monoxide poisoning", perc: getPerc(props.disease274)},
              {type: "Cartilage damage", perc: getPerc(props.disease275)},
              {type: "Catarrh", perc: getPerc(props.disease276)},
              {type: "Cavernoma", perc: getPerc(props.disease277)},
              {type: "Cerebral palsy", perc: getPerc(props.disease278)},
              {type: "Cervical rib", perc: getPerc(props.disease279)},
              {type: "Cervical spondylosis", perc: getPerc(props.disease280)},
              {type: "Chlamydia", perc: getPerc(props.disease281)},
              {type: "Cholesteatoma", perc: getPerc(props.disease282)},
              {type: "Chronic fatigue syndrome (CFS/ME)", perc: getPerc(props.disease283)},
              {type: "Chronic kidney disease", perc: getPerc(props.disease284)},
              {type: "Chronic lymphocytic leukaemia", perc: getPerc(props.disease285)},
              {type: "Chronic myeloid leukaemia", perc: getPerc(props.disease286)},
              {type: "Chronic traumatic encephalopathy", perc: getPerc(props.disease287)},
              {type: "Cirrhosis", perc: getPerc(props.disease288)},
              {type: "Creutzfeldt-Jakob disease", perc: getPerc(props.disease289)},
              {type: "Clostridium difficile", perc: getPerc(props.disease290)},
              {type: "Cluster headaches", perc: getPerc(props.disease291)},
              {type: "Coccydynia (tailbone pain)", perc: getPerc(props.disease292)},
              {type: "Coeliac disease", perc: getPerc(props.disease293)},
              {type: "Concussion", perc: getPerc(props.disease294)},
              {type: "Coronary heart disease", perc: getPerc(props.disease295)},
              {type: "Corticobasal degeneration", perc: getPerc(props.disease296)},
              {type: "Crohn's disease", perc: getPerc(props.disease297)},
              {type: "Cyclical vomiting syndrome", perc: getPerc(props.disease298)},
              {type: "Cystic fibrosis", perc: getPerc(props.disease299)},
              {type: "Deep vein thrombosis", perc: getPerc(props.disease300)},
              {type: "Dehydration", perc: getPerc(props.disease301)},
              {type: "Frontotemporal dementia", perc: getPerc(props.disease302)},
              {type: "Vascular dementia", perc: getPerc(props.disease303)},
              {type: "Dementia with Lewy bodies", perc: getPerc(props.disease304)},
              {type: "Dengue", perc: getPerc(props.disease305)},
              {type: "Dental abscess", perc: getPerc(props.disease306)},
              {type: "Diabetic ketoacidosis", perc: getPerc(props.disease307)},
              {type: "DiGeorge syndrome (22q11 deletion)", perc: getPerc(props.disease308)},
              {type: "Discoid eczema", perc: getPerc(props.disease309)},
              {type: "Dislocated kneecap", perc: getPerc(props.disease310)},
              {type: "Dissociative disorders", perc: getPerc(props.disease311)},
              {type: "Diverticular disease and diverticulitis", perc: getPerc(props.disease312)},
              {type: "Dysarthria (difficulty speaking)", perc: getPerc(props.disease313)},
              {type: "Dyspraxia (developmental co-ordination disorder) in adults", perc: getPerc(props.disease314)},
              {type: "Dystonia", perc: getPerc(props.disease315)},
              {type: "Perforated eardrum", perc: getPerc(props.disease316)},
              {type: "Ebola virus disease", perc: getPerc(props.disease317)},
              {type: "Varicose eczema", perc: getPerc(props.disease318)},
              {type: "Ehlers-Danlos syndromes", perc: getPerc(props.disease319)},
              {type: "Embolism", perc: getPerc(props.disease320)},
              {type: "Encephalitis", perc: getPerc(props.disease321)},
              {type: "Endocarditis", perc: getPerc(props.disease322)},
              {type: "Epidermolysis bullosa", perc: getPerc(props.disease323)},
              {type: "Epididymitis", perc: getPerc(props.disease324)},
              {type: "Epiglottitis", perc: getPerc(props.disease325)},
              {type: "Erythema multiforme", perc: getPerc(props.disease326)},
              {type: "Erythromelalgia", perc: getPerc(props.disease327)},
              {type: "Ewing sarcoma", perc: getPerc(props.disease328)},
              {type: "Eye cancer", perc: getPerc(props.disease329)},
              {type: "Herpes simplex eye infections", perc: getPerc(props.disease330)},
              {type: "Foetal alcohol syndrome", perc: getPerc(props.disease331)},
              {type: "Food poisoning", perc: getPerc(props.disease332)},
              {type: "Gallbladder cancer", perc: getPerc(props.disease333)},
              {type: "Gallstones", perc: getPerc(props.disease334)},
              {type: "Gastritis", perc: getPerc(props.disease335)},
              {type: "Gastroparesis", perc: getPerc(props.disease336)},
              {type: "Gilbert's syndrome", perc: getPerc(props.disease337)},
              {type: "Glaucoma", perc: getPerc(props.disease338)},
              {type: "Glomerulonephritis", perc: getPerc(props.disease339)},
              {type: "Granulomatosis with polyangiitis (Wegener's granulomatosis)", perc: getPerc(props.disease340)},
              {type: "Guillain-Barré syndrome", perc: getPerc(props.disease341)},
              {type: "Haemochromatosis", perc: getPerc(props.disease342)},
              {type: "Hairy cell leukaemia", perc: getPerc(props.disease343)},
              {type: "Hay fever", perc: getPerc(props.disease344)},
              {type: "Head and neck cancer", perc: getPerc(props.disease345)},
              {type: "Heart attack", perc: getPerc(props.disease346)},
              {type: "Heart block", perc: getPerc(props.disease347)},
              {type: "Heart failure", perc: getPerc(props.disease348)},
              {type: "Mitral valve problems", perc: getPerc(props.disease349)},
              {type: "Hepatitis A", perc: getPerc(props.disease350)},
              {type: "Hepatitis B", perc: getPerc(props.disease351)},
              {type: "Hepatitis C", perc: getPerc(props.disease352)},
              {type: "Hereditary haemorrhagic telangiectasia (HHT)", perc: getPerc(props.disease353)},
              {type: "Hereditary neuropathy with pressure palsies (HNPP)", perc: getPerc(props.disease354)},
              {type: "Hereditary spastic paraplegia", perc: getPerc(props.disease355)},
              {type: "Hidradenitis suppurativa (HS)", perc: getPerc(props.disease356)},
              {type: "Hip fracture", perc: getPerc(props.disease357)},
              {type: "Hirschsprung's disease", perc: getPerc(props.disease358)},
              {type: "HIV and AIDS", perc: getPerc(props.disease359)},
              {type: "Huntington's disease", perc: getPerc(props.disease360)},
              {type: "Hydrocephalus", perc: getPerc(props.disease361)},
              {type: "Hyperparathyroidism", perc: getPerc(props.disease362)},
              {type: "Low blood sugar (hypoglycaemia)", perc: getPerc(props.disease363)},
              {type: "Hypoparathyroidism", perc: getPerc(props.disease364)},
              {type: "Hypothermia", perc: getPerc(props.disease365)},
              {type: "Underactive thyroid (hypothyroidism)", perc: getPerc(props.disease366)},
              {type: "Idiopathic pulmonary fibrosis", perc: getPerc(props.disease367)},
              {type: "Inflammatory bowel disease", perc: getPerc(props.disease368)},
              {type: "Interstitial cystitis", perc: getPerc(props.disease369)},
              {type: "Intracranial hypertension", perc: getPerc(props.disease370)},
              {type: "Japanese encephalitis", perc: getPerc(props.disease371)},
              {type: "Kidney cancer", perc: getPerc(props.disease372)},
              {type: "Kidney infection", perc: getPerc(props.disease373)},
              {type: "Kidney stones", perc: getPerc(props.disease374)},
              {type: "Klinefelter syndrome", perc: getPerc(props.disease375)},
              {type: "Kwashiorkor", perc: getPerc(props.disease376)},
              {type: "Labyrinthitis", perc: getPerc(props.disease377)},
              {type: "Lactose intolerance", perc: getPerc(props.disease378)},
              {type: "Lambert-Eaton myasthenic syndrome", perc: getPerc(props.disease379)},
              {type: "Laryngeal (larynx) cancer", perc: getPerc(props.disease380)},
              {type: "Lipoedema", perc: getPerc(props.disease381)},
              {type: "Liver cancer", perc: getPerc(props.disease382)},
              {type: "Long QT syndrome", perc: getPerc(props.disease383)},
              {type: "Long-sightedness", perc: getPerc(props.disease384)},
              {type: "Lyme disease", perc: getPerc(props.disease385)},
              {type: "Mastoiditis", perc: getPerc(props.disease386)},
              {type: "Measles", perc: getPerc(props.disease387)},
              {type: "Menopause", perc: getPerc(props.disease388)},
              {type: "Mesothelioma", perc: getPerc(props.disease389)},
              {type: "Metabolic syndrome", perc: getPerc(props.disease390)},
              {type: "Molar pregnancy", perc: getPerc(props.disease391)},
              {type: "Motor neurone disease", perc: getPerc(props.disease392)},
              {type: "Mouth cancer", perc: getPerc(props.disease393)},
              {type: "Multiple myeloma", perc: getPerc(props.disease394)},
              {type: "Multiple sclerosis", perc: getPerc(props.disease395)},
              {type: "Multiple system atrophy", perc: getPerc(props.disease396)},
              {type: "Myasthenia gravis", perc: getPerc(props.disease397)},
              {type: "Ménière's disease", perc: getPerc(props.disease398)},
              {type: "Nail patella syndrome", perc: getPerc(props.disease399)},
              {type: "Nasal and sinus cancer", perc: getPerc(props.disease400)},
              {type: "Nasal polyps", perc: getPerc(props.disease401)},
              {type: "Nasopharyngeal cancer", perc: getPerc(props.disease402)},
              {type: "Necrotising fasciitis", perc: getPerc(props.disease403)},
              {type: "Neuroblastoma", perc: getPerc(props.disease404)},
              {type: "Neuroendocrine tumours and carcinoid syndrome", perc: getPerc(props.disease405)},
              {type: "Neurofibromatosis type 1", perc: getPerc(props.disease406)},
              {type: "Neurofibromatosis type 2", perc: getPerc(props.disease407)},
              {type: "Neuromyelitis optica", perc: getPerc(props.disease408)},
              {type: "Non-gonococcal urethritis", perc: getPerc(props.disease409)},
              {type: "Obsessive compulsive disorder (OCD)", perc: getPerc(props.disease410)},
              {type: "Oesophageal cancer", perc: getPerc(props.disease411)},
              {type: "Otosclerosis", perc: getPerc(props.disease412)},
              {type: "Ovarian cancer", perc: getPerc(props.disease413)},
              {type: "Overactive thyroid (hyperthyroidism)", perc: getPerc(props.disease414)},
              {type: "Paget's disease of bone", perc: getPerc(props.disease415)},
              {type: "Pancreatic cancer", perc: getPerc(props.disease416)},
              {type: "Panic disorder", perc: getPerc(props.disease417)},
              {type: "Paralysis", perc: getPerc(props.disease418)},
              {type: "Parkinson's disease", perc: getPerc(props.disease419)},
              {type: "Patau's syndrome", perc: getPerc(props.disease420)},
              {type: "Pelvic inflammatory disease", perc: getPerc(props.disease421)},
              {type: "Pelvic organ prolapse", perc: getPerc(props.disease422)},
              {type: "Penile cancer", perc: getPerc(props.disease423)},
              {type: "Peripheral arterial disease (PAD)", perc: getPerc(props.disease424)},
              {type: "Phlebitis (superficial thrombophlebitis)", perc: getPerc(props.disease425)},
              {type: "Phobias", perc: getPerc(props.disease426)},
              {type: "Piles (haemorrhoids)", perc: getPerc(props.disease427)},
              {type: "Polio", perc: getPerc(props.disease428)},
              {type: "Polycythaemia", perc: getPerc(props.disease429)},
              {type: "Polymorphic light eruption", perc: getPerc(props.disease430)},
              {type: "Polymyalgia rheumatica", perc: getPerc(props.disease431)},
              {type: "Post-polio syndrome", perc: getPerc(props.disease432)},
              {type: "Postnatal depression", perc: getPerc(props.disease433)},
              {type: "Postpartum psychosis", perc: getPerc(props.disease434)},
              {type: "Prader-Willi syndrome", perc: getPerc(props.disease435)},
              {type: "Pre-eclampsia", perc: getPerc(props.disease436)},
              {type: "Pressure ulcers (pressure sores)", perc: getPerc(props.disease437)},
              {type: "Primary biliary cholangitis (primary biliary cirrhosis)", perc: getPerc(props.disease438)},
              {type: "Prostate cancer", perc: getPerc(props.disease439)},
              {type: "Prostatitis", perc: getPerc(props.disease440)},
              {type: "Psychosis", perc: getPerc(props.disease441)},
              {type: "Pubic lice", perc: getPerc(props.disease442)},
              {type: "Pudendal neuralgia", perc: getPerc(props.disease443)},
              {type: "Pulmonary hypertension", perc: getPerc(props.disease444)},
              {type: "Q fever", perc: getPerc(props.disease445)},
              {type: "Reactive arthritis", perc: getPerc(props.disease446)},
              {type: "Repetitive strain injury (RSI)", perc: getPerc(props.disease447)},
              {type: "Respiratory tract infections (RTIs)", perc: getPerc(props.disease448)},
              {type: "Retinal migraine", perc: getPerc(props.disease449)},
              {type: "Rett syndrome", perc: getPerc(props.disease450)},
              {type: "Reye's syndrome", perc: getPerc(props.disease451)},
              {type: "Rosacea", perc: getPerc(props.disease452)},
              {type: "Roseola", perc: getPerc(props.disease453)},
              {type: "Schizophrenia", perc: getPerc(props.disease454)},
              {type: "Scoliosis", perc: getPerc(props.disease455)},
              {type: "Seasonal affective disorder (SAD)", perc: getPerc(props.disease456)},
              {type: "Shin splints", perc: getPerc(props.disease457)},
              {type: "Shoulder impingement", perc: getPerc(props.disease458)},
              {type: "Sick building syndrome", perc: getPerc(props.disease459)},
              {type: "Sickle cell disease", perc: getPerc(props.disease460)},
              {type: "Sinusitis (sinus infection)", perc: getPerc(props.disease461)},
              {type: "Sjogren's syndrome", perc: getPerc(props.disease462)},
              {type: "Slapped cheek syndrome", perc: getPerc(props.disease463)},
              {type: "Sleep apnoea", perc: getPerc(props.disease464)},
              {type: "Sleep paralysis", perc: getPerc(props.disease465)},
              {type: "Social anxiety (social phobia)", perc: getPerc(props.disease466)},
              {type: "Soft tissue sarcomas", perc: getPerc(props.disease467)},
              {type: "Spinal muscular atrophy", perc: getPerc(props.disease468)},
              {type: "Spondylolisthesis", perc: getPerc(props.disease469)},
              {type: "Stevens-Johnson syndrome", perc: getPerc(props.disease470)},
              {type: "Tapeworms", perc: getPerc(props.disease471)},
              {type: "Tay-Sachs disease", perc: getPerc(props.disease472)},
              {type: "Temporal arteritis", perc: getPerc(props.disease473)},
              {type: "Excessive thirst", perc: getPerc(props.disease474)},
              {type: "Thyroid cancer", perc: getPerc(props.disease475)},
              {type: "Transient ischaemic attack (TIA)", perc: getPerc(props.disease476)},
              {type: "Tooth decay", perc: getPerc(props.disease477)},
              {type: "Tourette's syndrome", perc: getPerc(props.disease478)},
              {type: "Toxic shock syndrome", perc: getPerc(props.disease479)},
              {type: "Transurethral resection of the prostate (TURP)", perc: getPerc(props.disease480)},
              {type: "Trichomoniasis", perc: getPerc(props.disease481)},
              {type: "Trichotillomania (hair pulling disorder)", perc: getPerc(props.disease482)},
              {type: "Trimethylaminuria ('fish odour syndrome')", perc: getPerc(props.disease483)},
              {type: "Tuberculosis (TB)", perc: getPerc(props.disease484)},
              {type: "Ulcerative colitis", perc: getPerc(props.disease485)},
              {type: "Urinary tract infections (UTIs)", perc: getPerc(props.disease486)},
              {type: "Uveitis", perc: getPerc(props.disease487)},
              {type: "Vaginal cancer", perc: getPerc(props.disease488)},
              {type: "Vaginal dryness", perc: getPerc(props.disease489)},
              {type: "Vulvodynia (vulval pain)", perc: getPerc(props.disease490)},
              {type: "Vaginitis", perc: getPerc(props.disease491)},
              {type: "Vitiligo", perc: getPerc(props.disease492)},
              {type: "Von Willebrand disease", perc: getPerc(props.disease493)},
              {type: "Vulval cancer", perc: getPerc(props.disease494)},
              {type: "Whiplash", perc: getPerc(props.disease495)},
              {type: "Whooping cough", perc: getPerc(props.disease496)},
              {type: "Zika virus", perc: getPerc(props.disease497)},
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
              .setHTML("Disease occured : <br>disease name: " + tsunami)
              .addTo(map);
          });


      });

    }
    
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

export { DocMap };
