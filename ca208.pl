/* FACTS */

parents(david, george, noreen).
parents(jennifer, george, noreen).
parents(georgejr, george, noreen).
parents(scott, george, noreen).
parents(joanne, george, noreen).
parents(jessica, david, edel).
parents(clara, david, edel).
parents(michael, david, edel).
parents(laura, georgejr, susan).
parents(anna, scott, siobhan).


/* Relationships */

father(X, Y) :- parents(Y, X, _).
male(X) :- father(X, _).

mother(X, Y) :- parents(Y, _, X).
female(X) :- mother(X, _).

grandfather(X, Y) :- father(X, Z), father(Z, Y).
grandfather(X, Y) :- father(X, Z), mother(Z, Y).

grandmother(X, Y) :- mother(X, Z), mother(Z, Y).
grandmother(X, Y) :- mother(X, Z), father(Z, Y).

brother(X, Y) :- male(X), father(Z, X), father(Z, Y), X \== Y.

sister(X, Y) :- female(X), father(Z, X), father(Z, Y), X \== Y.

uncle(X, Y) :- brother(X, Z), father(Z, Y).

aunt(X, Y) :- female(X), parents(_, T, X), uncle(T, Y).

cousin(X, Y) :- grandfather(Z, X), grandfather(Z, Y), father(W, X), father(R, Y), brother(W, R), father(Z, W).

__________________________________________________________________________


book(illiad,homer,study,500).
book(c,richie,study, 150).
book(ntbible,sams,reference,480).
book(ntfordummies,bob, reference,200).
book(montypython,cleese,comedy,300).
book(pythonalgorithms,david,study, 225).
book(lilacbus,binchey,fiction,200).
book(hamlet,shakespere,drama,450).

build_library(Lib) :- findall(book(Title, Author, Genre, Size), book(Title, Author, Genre, Size), Lib).


/* To find the leisure books in the library first build the library from the
   facts below and then query the library e.g.

   build_library(Lib),leisure(B,Lib).
*/

leisure_book(book(_, _, Genre, _)) :- Genre == comedy.
leisure_book(book(_, _, Genre, _)) :- Genre == fiction.
leisure(_,[]).
leisure(H, [H | _]) :- leisure_book(H).
leisure(B, [_ | T]) :- leisure(B, T).

literature_book(book(_, _, Genre,_)) :- Genre == drama.
literature(_,[]).
literature(B, [B | _]) :- literature_book(B).
literature(B, [_ | T]) :- literature(B, T).

revision_book(book(_, _, Genre, Page)) :- Genre == study, Page > 300.
revision_book(book(_, _, Genre, Page)) :- Genre == reference, Page > 300.
revision(_,[]).
revision(B, [B | _]) :- revision_book(B).
revision(B, [_|T]) :- revision(B, T).

holiday_book(book(_, _, Genre, Page)) :- Genre \== study , Genre \== reference, Page < 400.
holiday(_,[]).
holiday(B,[B|_]) :- holiday_book(B).
holiday(B,[_|T]) :- holiday(B,T).

__________________________________________________________________________

myElem(X, [X|_]).
myElem(X,[_|T]) :- myElem(X,T).

myHead(X,[X|_]).

myLast(X,[X|[]]).
myLast(X, [_|T]) :- myLast(X, T).

myTail(A,[_|A]).
myTail(A,[_|B]) :- myTail(A,B).

%myAppend(A,B,C).

myAppend([],X,X).
myAppend([HA|TA],B,[HA|TC]) :- myAppend(TA,B,TC).

myReverse([], []).
myReverse([H|T],B) :- myReverse(T,S), myAppend(S,[H],B).

myDelete(X, [X|B], B).
myDelete(X, [_|A], [_|B]) :- myDelete(X, A, B).

__________________________________________________________________________

%class(X,Y) :- Y == negative, negative(X), !; Y == positive, positive(X), !; Y == zero, zero(X), !.

%negative(X) :- X < 0.
%positive(X) :- X > 0.
%zero(X) :- X is 0.

class(X, positive) :- X > 0, !.
class(X, negative) :- X < 0, !.
class(0, zero).

split([],[],[]) :- !.
split([HI|TI], P, [HI|TN]) :- class(HI, negative), split(TI, P, TN), !.
split([HI|TI], [HI|PN], N) :- class(HI, positive), split(TI, PN, N), !; class(HI, zero), split(TI, PN, N), !.

