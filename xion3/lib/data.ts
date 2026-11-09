export type Program={id:string;title:string;city:string;category:string;ages:string;cost:string;description:string;image:string;organization:string;scholarship:boolean;financialAid?:boolean;website?:string;registration?:string;address?:string;spanishTitle?:string;languages?:string;groupId?:string;locationId?:string};
export const demoPrograms:Program[]=[
{id:'demo-1',title:'Youth Basketball & Skills',city:'San Jose',category:'Sports',ages:'10–14',cost:'Contact for pricing',description:'Explore youth basketball opportunities, team play and skill development.',image:'🏀',organization:'Community program — sample',scholarship:true},
{id:'demo-2',title:'Coding & Creative Technology',city:'Santa Clara',category:'STEM',ages:'12–17',cost:'Varies',description:'Hands-on programming and creative computing opportunities.',image:'💻',organization:'STEM provider — sample',scholarship:false},
{id:'demo-3',title:'Beginner Art Workshops',city:'San Jose',category:'Arts',ages:'8–15',cost:'Varies',description:'Discover creative expression through painting and design.',image:'🎨',organization:'Arts provider — sample',scholarship:false},
{id:'demo-4',title:'Soccer Skills & Team Play',city:'Campbell',category:'Sports',ages:'7–13',cost:'Varies',description:'Build confidence, coordination, and teamwork.',image:'⚽',organization:'Sports provider — sample',scholarship:true},
{id:'demo-5',title:'Music Discovery',city:'Sunnyvale',category:'Music',ages:'9–16',cost:'Varies',description:'Explore instruments and performance in a supportive setting.',image:'🎸',organization:'Music provider — sample',scholarship:false},
{id:'demo-6',title:'Academic Enrichment',city:'Milpitas',category:'Tutoring',ages:'11–18',cost:'Varies',description:'Find academic support and learning enrichment.',image:'📚',organization:'Learning provider — sample',scholarship:true}
];

import cms from '../data/cms.json';
const locations = new Map(cms.Locations.map(l => [l.location_id,l]));
const groups = new Map(cms.Groups.map(g => [g.group_id,g]));
const isYes=(v?:string)=>/^(yes|true)$/i.test((v||'').trim());
const available=(v?:string)=>/\byes\b/i.test(v||'');
export const cmsPrograms:Program[]=cms.Programs.filter(p=>p.status?.toLowerCase()==='active').map(p=>{
 const loc=locations.get(p.location_id); const group=groups.get(p.group_id);
 const scholarship=available(p.scholarship_available); const financialAid=available(p.financial_aid_available);
 return {id:p.program_id,title:p.program_name || 'Untitled Program',spanishTitle:p.program_name_es||'',city:loc?.city||p.City||'Bay Area',category:p.category||'Other',ages:p.age_group||'Ask provider',cost:p.cost_type||'Contact provider',description:[p.highlights,loc?.description].filter(Boolean).join(' · ')||'Explore this local extracurricular opportunity.',image:({Sports:'🏀',STEM:'💻',Arts:'🎨',Music:'🎵',Tutoring:'📚',Fitness:'💪'} as Record<string,string>)[p.category]||'✳',organization:loc?.location_name||group?.group_name||p.location_name||'Local organization',scholarship,financialAid,website:p.website_override||loc?.website||p.Classes_Camps||'',registration:p.Registration_Link||'',address:loc?.address||'',languages:p.language||loc?.languages||'',groupId:p.group_id,locationId:p.location_id};
});
