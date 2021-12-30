import Luckoil from '../assets/companies/luckoil.svg';
import Gasprom from '../assets/companies/gasprom.svg';
import Rosneft from '../assets/companies/rosneft.svg';

export function selectCardCompany(company){
    switch (company) {
        case "Luckoil": return Luckoil;
        case "Gasprom": return Gasprom;
        case "Rosneft": return Rosneft;
    }
}
