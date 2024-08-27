import { Component } from '@angular/core';
@Component({
  selector: 'app-legal-individual-person',
  templateUrl: './legal-individual-person.component.html',
  styleUrl: './legal-individual-person.component.scss',
})
export class LegalIndividualPersonComponent {
  displayedColumns: any[] = [
    {
      key:'person',
      name:'Hüquqi(fiziki) şəxsin adı '
    },  
    {
      key:'phone',
      name:'Telefon nömrəsi'
    },
    {
      key:'voen',
      name:'Vöen'
    },
    {
      key:'leader',
      name:'Rəhbərin S.A.A'
    },
    {
      key:'activityType',
      name:'Fəaliyyət növü'
    },
    {
      key:'legalAddress',
      name:'Hüquqi ünvan'
    },
    {
      key:'object',
      name:'Müəssisə üzrə ə.a.m.'
    },
    {
      key:'subordination',
      name:'Tabeçiliyi'
    },
    {
      key:'note',
      name:'Qeyd'
    }
  ];

  ELEMENT_DATA: any = [
    {
      person: 'Məmmədov Nazim Mürvət',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Səfərov Azər Cəlil',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Heydərov Elnur Kamran',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'CONCO QAPALI SƏHMDAR CƏMİYYƏTİ',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Məmmədov Nazim Mürvət',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Mərdanlı Şamxal',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'AĞASİYEV MƏMMƏD RƏSUL',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'HÜSEYNOV BƏHRUZ BEHBUD',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'PAŞA-K FİRMASI',
      phone: '055 222 22 22',
      voen: '10000093201',
      leader: 'Məhəmməd Nağıyev',
      activityType: 'Neft məhsullarının pərakəndə satışı',
      legalAddress: 'Kəlbəcər rayonu',
      object:
        '20 / Texnoloji nəqliyyat vasitələrində işlərin təhlükəsiz görülməsinə nəzarət müfətişliyi',
      subordination: 'xxxxxxxxx',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
  ];

  logData($event: any) {
    console.log('event', $event);
  }
}
