import { IRider } from "../models/RiderModel";
import RiderWalletModel from "../models/RiderWalletModel";
import EmployeeCardRepository, { IEmployeeCard } from "../repositories/EmployeeCardRepository";
import RiderRepository from "../repositories/RiderRepository";
import RiderWalletRepository from "../repositories/RiderWalletRepository";

export interface IFilipayCard{

   _id: string,
   cardID: string,
   balance: number,
   cardType: string,

}

class FilipayCardService{

    async GetAllData() {
        // try {
        //     const employeeCards = await EmployeeCardRepository.GetAllEmployeeCard();
    
        //     if (Object(employeeCards).length !== 0 && employeeCards !== null) {
        //         const cards: any[] = [];
    
        //         await Promise.all(
        //             employeeCards.map(async (card: any) => {
        //                 let newCard = {
        //                     "_id": "",
        //                     "cardId": "",
        //                     "balance": 0,
        //                     "cardType": "regular"
        //                 };
    
        //                 const registeredRiders = await RiderRepository.GetRiderByCardId(card.cardId);
        //                 console.log("test")
        //                 if (registeredRiders !== null && registeredRiders.balance !== undefined) {
        //                     const getData: any = await RiderWalletRepository.GetRiderWalletByRiderId(registeredRiders._id);
      
        //                     if (Object(getData).length > 0) {
        //                         if (registeredRiders.sNo.startsWith("SND")) {
        //                             newCard = {
        //                                 "_id": card._id,
        //                                 "cardId": card.cardId,
        //                                 "balance": parseFloat(getData.balance),
        //                                 "cardType": "discounted"
        //                             };
        //                         }
    
        //                         if (registeredRiders.sNo.startsWith("SNR")) {
        //                             newCard = {
        //                                 "_id": card._id,
        //                                 "cardId": card.cardId,
        //                                 "balance": parseFloat(getData.balance),
        //                                 "cardType": "regular"
        //                             };
        //                         }
        //                     }
                          
        //                 }
    
        //                 cards.push(newCard);
        //             })
        //         );
    
        //         return { status: 0, message: "OK", response: cards };
        //     }
        // } catch (e) {
        //     console.log(`Error in get all services: ${e}`);
        //     return { status: 500, message: e, response: {} };
        // }

        try {
            // Perform aggregation to join data and transform it
            // const result = await RiderWalletModel.aggregate([
            //   {
            //     $lookup: {
            //       from: 'rider',
            //       localField: 'riderId',
            //       foreignField: '_id',
            //       as: 'riderInfo',
            //     },
            //   },
            //   {
            //     $unwind: '$riderInfo',
            //   },
            //   {
            //     $project: {
            //       _id: '$riderId',
            //       cardID: '$riderInfo.cardId',
            //       balance: '$balance',
            //       cardType: {
            //         $cond: {
            //           if: { $eq: ['$balance', 0] },
            //           then: 'regular',
            //           else: 'discounted',
            //         },
            //       },
            //     },
            //   },
            // ]);




            const result = await RiderWalletModel.aggregate([
                {
                  $lookup: {
                    from: 'rider',
                    localField: 'riderId',
                    foreignField: '_id',
                    as: 'riderInfo',
                  },
                },
                {
                  $unwind: '$riderInfo',
                },
                {
                  $project: {
                    _id: '$riderId',
                    cardID: '$riderInfo.cardId',
                    balance: '$balance',
                    cardType: {
                      $cond: {
                        if: { $eq: ['$balance', 0] },
                        then: 'regular',
                        else: {
                          $cond: {
                            if: { $eq: [{ $substr: ['$riderInfo.sNo', 0, 3] }, 'SNR'] },
                            then: 'regular',
                            else: 'discounted',
                          },
                        },
                      },
                    },
                  },
                },
              ]);
              
        
            return { status: 0, message: "OK", response: result };
          } catch (error) {
            console.error(error);
            return { status: 1, message: "ERROR", response: error };
          }
    }
    

}

export default new FilipayCardService();